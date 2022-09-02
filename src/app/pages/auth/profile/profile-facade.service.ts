import { Injectable } from '@angular/core';
import { PatchedUser, ServiceProviderProfile, ServiceProviderUser, User, UserProfile } from 'src/api/models';
import { AccountService, CompaniesService } from 'src/api/services';
import { LocationsFacadeService } from '../../locations/locations-facade.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacadeService {

  constructor(
    private companyService: CompaniesService,
    private accountService: AccountService,
    private locationService: LocationsFacadeService,
  ) { }

  async getCompanies() {
    return await (await this.companyService.companiesList()).toPromise();
  }

  async getLocations() {
    return await this.locationService.getLocations();
  }

  async getUserInfo() {
    return await (await this.accountService.accountUserMeRetrieve()).toPromise().then((user: any) => {

      if (user.options) {
        if (user.options.experience) {
          user.options.experience = _.sortBy(user.options.experience, 'name');
        }

        if (user.options.certificates) {
          user.options.certificates = _.sortBy(user.options.certificates, 'name');
        }

        if (user.options.training) {
          user.options.training = _.sortBy(user.options.training, 'name');
        }
      }
      return user;
    });
  }

  async updateUserInfo(user: PatchedUser) {
    return await (await this.accountService.accountUserPartialUpdate$FormData({
      id: user.id,
      body: user
    })).toPromise();
  }

  async updateServiceProviderProfile(user: ServiceProviderUser | any) {
    return await (await this.accountService.accountUserPartialUpdate$Json({
      id: user.id,
      body: user
    })).toPromise();
  }

  async getUserById(userId: string) {
    return await (await this.accountService.accountUserRetrieve({
      id: userId
    })).toPromise() as unknown as ServiceProviderUser;
  }

  async uploadProfilePicture(user: ServiceProviderUser, picture: File) {
    return await (await this.accountService.accountUserProfilePictureUpdate({
      id: user.id,
      body: {
        profile_picture: picture
      } as any
    })).toPromise();
  }
}
