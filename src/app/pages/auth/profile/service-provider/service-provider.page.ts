import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Company, Location, ServiceProviderProfile, ServiceProviderUser, User, UserProfile } from 'src/api/models';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { ProfileFacadeService } from 'src/app/pages/auth/profile/profile-facade.service';
import { OptionsList, ServiceProviderOptions } from './service-provider.config';
import { Device } from '@capacitor/device';
import { Camera } from '@capacitor/camera';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.page.html',
  styleUrls: ['./service-provider.page.scss'],
})
export class ServiceProviderPage implements OnInit {

  locations: Location[];
  user: ServiceProviderUser;
  readonly Options = OptionsList;
  @ViewChild('profilePictureButton') profilePictureButton: ElementRef;
  readonly environment = environment;
  available = false;

  profileForm = new FormGroup({
    id: new FormControl(null),
    profile: new FormGroup({
      available: new FormControl(false),
      location: new FormControl(''),
      rate_standard: new FormControl(null),
      rate_emergency: new FormControl(null),
      user: new FormControl(null),
      description: new FormControl(''),
      skills: new FormControl([]),
      experience: new FormControl([]),
      certificates: new FormControl([]),
      training: new FormControl([])
    }),
    email: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    public profileFacadeService: ProfileFacadeService,
    public navController: NavController,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.addOptionsToLocationDropdown();
    await this.setUser();
    this.updateForm();
  }

  async setUser() {
    const serviceProviderUserId = this.activatedRoute.snapshot.params.serviceProviderUserId;
    if (serviceProviderUserId) {
      this.user = await this.profileFacadeService.getUserById(serviceProviderUserId) as ServiceProviderUser;
    } else {
      this.user = await this.profileFacadeService.getUserInfo() as ServiceProviderUser;
    }
  }

  async addOptionsToLocationDropdown() {
    this.locations = await this.profileFacadeService.getLocations() as Location[];
  }

  @completionNotifier()
  @loader()
  async updateProfile() {
    const updatedProfile = await this.profileFacadeService.updateServiceProviderProfile(this.profileForm.value) as ServiceProviderUser;
    this.user = updatedProfile;
    this.updateForm();
  }

  updateForm() {
    this.profileForm.patchValue({
      ...this.user,
    });
  }

  updateOptions(value, type) {
    const checkedType = value.filter((item) => item.isChecked).map((item) => item.id);
    const update = {};
    update[type] = checkedType;
    this.profileForm.patchValue({
      profile: update
    });
  }

  async toggleStatus() {
    const status = this.profileForm.get('profile.available').value;
    this.profileForm.patchValue({
      profile: {
        available: status
      }
    });
    await this.updateProfile();
  }

  async clickFileInput() {
    if ((await Device.getInfo()).platform !== 'web') {
      await Camera.requestPermissions();
    }
    this.profilePictureButton.nativeElement.click();
  }

  selectFileToUpload(documentToUpload) {
    const file = documentToUpload.target.files[0];
    this.uploadDocument(file);
  }

  @loader()
  @completionNotifier('', false)
  async uploadDocument(file) {
    await this.profileFacadeService.uploadProfilePicture(this.user, file);
    this.user = await this.profileFacadeService.getUserInfo() as ServiceProviderUser;
  }
}
