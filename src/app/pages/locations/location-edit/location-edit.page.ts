import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { Location, PatchedLocation, RolesEnum } from 'src/api/models';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { confirmOperation } from 'src/app/shared/decorators/confirm-operation';
import { loader } from 'src/app/shared/decorators/loader';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LocationsFacadeService } from '../locations-facade.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.page.html',
  styleUrls: ['./location-edit.page.scss'],
})
export class LocationEditPage implements OnInit {

  location: Location;
  readonly Roles = RolesEnum;

  locationForm = new FormGroup({
    id: new FormControl(null),
    address: new FormControl(''),
    city: new FormControl(''),
    zip_code: new FormControl(''),
    company: new FormControl(null),
    name: new FormControl(''),
    remark: new FormControl(''),
  });

  constructor(
    public locationFacadeService: LocationsFacadeService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public perm: NgxPermissionsService,
  ) { }

  async ngOnInit() {
    const snapshotParams = this.activatedRoute.snapshot.params;
    if (snapshotParams.location) {
      this.location = await this.locationFacadeService.getLocation(snapshotParams.location);
      this.locationForm.patchValue({
        ...this.location
      });
    }
  }

  @completionNotifier()
  @loader()
  async addOrUpdate() {
    if (this.location && this.location.id) {
      await this.updateLocation();
    } else {
      await this.addLocation();
    }
  }


  async addLocation() {
    this.location = await this.locationFacadeService.addLocation(this.locationForm.value);
  }

  async updateLocation() {
    this.location = await this.locationFacadeService.updateLocation(this.locationForm.value);
  }

  @confirmOperation('Deleting Location')
  @loader()
  @completionNotifier('', true, 'Cannot delete this location because it is being used by an Order')
  async deleteLocation(location: Location) {
    await this.locationFacadeService.deleteLocation(location);
    await this.router.navigate(['/locations']);
  }

}
