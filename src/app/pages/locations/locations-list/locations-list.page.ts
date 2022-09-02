import { ChangeDetectorRef, Component } from '@angular/core';
import { Location, RolesEnum } from 'src/api/models';
import { loader } from 'src/app/shared/decorators/loader';
import { LocationsFacadeService } from '../locations-facade.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.page.html',
  styleUrls: ['./locations-list.page.scss'],
})
export class LocationsListPage {

  filter: string;
  locations: Location[];
  readonly Roles = RolesEnum;

  constructor(
    public locationFacade: LocationsFacadeService,
    public changeDetectorRef: ChangeDetectorRef,
  ) { }

  @loader()
  async ionViewDidEnter() {
    this.locations = await this.locationFacade.getLocations();
  }

  setFilter($event) {
    if ($event) {
      this.filter = $event.value;
    }

    this.changeDetectorRef.detectChanges();
  }
}
