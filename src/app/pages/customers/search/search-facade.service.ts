import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { OrderCandidate, Type2DeEnum } from 'src/api/models';
import { OrdersService } from 'src/api/services';
import { ConfirmSearchCandidatesComponent } from './components/confirm-search-candidates/confirm-search-candidates.component';

@Injectable({
  providedIn: 'root'
})
export class SearchFacadeService {

  selectedCandidates = new BehaviorSubject<string[]>([]);
  MAX_SELECTION = 3;

  constructor(
    public orderService: OrdersService,
    public popoverController: PopoverController,
  ) { }

  chooseCandidate(candidateId: string) {
    const candidateIndex = this.selectedCandidates.getValue().indexOf(candidateId);
    if (candidateIndex === -1) {
      this.selectedCandidates.next([
        ...this.selectedCandidates.getValue(),
        candidateId
      ]);
    } else {
      (this.selectedCandidates.getValue().splice(candidateIndex, 1));
      this.selectedCandidates.next([
        ...this.selectedCandidates.getValue()
      ]);
    }
  }

  isCandidateChoosen(candidateId: string) {
    return this.isCandidateSelectionNonEmpty() && this.selectedCandidates.getValue().indexOf(candidateId) > -1;
  }

  isCandidateSelectionInLimit() {
    return this.selectedCandidates.getValue().length <= this.MAX_SELECTION;
  }

  isCandidateSelectionValid() {
    return this.isCandidateSelectionNonEmpty() && this.isCandidateSelectionInLimit();
  }

  isCandidateSelectionNonEmpty() {
    return this.selectedCandidates.getValue() && this.selectedCandidates.getValue().length > 0;
  }

  async getCandidates(orderId: number, filter = 'distance'): Promise<OrderCandidate[]> {
    return await (await this.orderService.ordersCandidatesRetrieve({
      id: orderId,
      sort: filter as any
    })).toPromise().then(async (result: any) => {
      const rateField = await this.getApplicableRate(orderId);
      result.map((candidate) => candidate.profile.applicable_rate = candidate.profile[rateField]);
      return result.filter((candidate) => candidate.distance !== null);
    });
  }

  async getApplicableRate(orderId: number) {
    const order = await this.getOrder(orderId);
    let rateField = 'rate_standard';
    if (order.type === Type2DeEnum.EmergencyRepair) {
      rateField = 'rate_emergency';
    }

    return rateField;
  }

  async getCandidate(orderId: number, candidateId: number): Promise<OrderCandidate> {
    return await (await this.orderService.ordersCandidatesRetrieve({
      id: orderId
    })).toPromise().then(async (response: any) => {

      if (!response || response === {} || response === []) {
        response = [];
      }
      const rateField = await this.getApplicableRate(orderId);
      return response.find((result) => {
        result.profile.applicable_rate = result.profile[rateField];
        return result.profile.id === candidateId;
      });
    });
  }

  async selectCandidates(orderId: number) {
    return await (await this.orderService.ordersPartialUpdate$Json({
      id: orderId,
      body: {
        candidate_service_providers: this.selectedCandidates.getValue()
      }
    })).toPromise().then(() => {
      this.selectedCandidates.next([]);
    }).finally(() => {
      this.selectedCandidates.next(null);
    });
  }

  async openConfirmationPopover() {
    const popover = await this.popoverController.create({
      component: ConfirmSearchCandidatesComponent,
      cssClass: 'confirm-search-candidates-popover',
      translucent: false
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data && data.approved) {
      return true;
    } else {
      return false;
    }
  }

  async getOrder(id: number) {
    return await (await this.orderService.ordersRetrieve({
      id
    })).toPromise();
  }
}
