import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Machine } from 'src/api/models';
import { loader } from 'src/app/shared/decorators/loader';
import { MachinesFacadeService } from '../machines-facade.service';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.page.html',
  styleUrls: ['./machines-list.page.scss'],
})
export class MachinesListPage implements OnInit {

  machines: Machine[];
  locationId: number;
  filter: string;

  constructor(
    public machineFacade: MachinesFacadeService,
    public activatedRoute: ActivatedRoute,
    public changeDetectorRef: ChangeDetectorRef,
  ) { }


  async ngOnInit() {
    const snapshotParams = this.activatedRoute.snapshot.params;
    if (snapshotParams.location) {
      this.locationId = +snapshotParams.location;
    }
  }

  @loader()
  async ionViewDidEnter() {
    this.machines = await this.machineFacade.getMachines();
  }

  setFilter($event) {
    if ($event) {
      this.filter = $event.value;
    }

    this.changeDetectorRef.detectChanges();
  }

}
