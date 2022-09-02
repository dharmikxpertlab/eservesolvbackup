import { Injectable } from '@angular/core';
import { PatchedLocation, Location } from 'src/api/models';
import { LocationsService } from 'src/api/services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsFacadeService {

  constructor(
    public locationService: LocationsService,
    public authService: AuthService,
  ) { }

  async getLocations(): Promise<Location[]> {
    return await (await this.locationService.locationsList()).toPromise() as Location[];
  }

  async getLocation(id: number): Promise<Location> {
    return await (await this.locationService.locationsRetrieve({
      id
    })).toPromise();
  }

  async addLocation(location: Location): Promise<Location> {
    const company = await (await this.authService.getUserInfo()).company;
    location.company = company;
    return await (await this.locationService.locationsCreate$Json({
      body: location
    })).toPromise();
  }

  async updateLocation(location: PatchedLocation): Promise<Location> {
    return await (await this.locationService.locationsPartialUpdate$Json({
      id: location.id,
      body: location
    })).toPromise();
  }

  async deleteLocation(location: Location): Promise<any> {
    return await (await this.locationService.locationsDestroy({
      id: location.id
    })).toPromise();
  }
}
