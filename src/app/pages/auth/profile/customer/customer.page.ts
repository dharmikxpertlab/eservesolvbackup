import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Company, User } from 'src/api/models';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { ProfileFacadeService } from 'src/app/pages/auth/profile/profile-facade.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  companies: Company[];
  user: User;

  profileForm = new FormGroup({
    id: new FormControl(null),
    company: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    is_service_provider: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  get company() {
    if (this.companies && this.profileForm.get('company').value) {
      return _.find(this.companies, { id: this.profileForm.get('company').value});
    }

    return null;
  }

  constructor(
    public profileFacadeService: ProfileFacadeService,
    public navController: NavController,
    public router: Router
  ) { }

  async ngOnInit() {
    this.companies = await this.profileFacadeService.getCompanies() as Company[];
    this.user = await this.profileFacadeService.getUserInfo();
    this.updateForm();
  }

  updateForm() {
    this.profileForm.patchValue({
      company: this.companies[this.user.company],
      ...this.user
    });
  }

  @completionNotifier()
  @loader()
  async updateProfile() {
    this.user = await this.profileFacadeService.updateUserInfo(this.profileForm.value);
    this.updateForm();
  }

}
