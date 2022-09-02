import { Component, Input, OnInit } from '@angular/core';
import { ProfileFacadeService } from 'src/app/pages/auth/profile/profile-facade.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-order-user-banner',
  templateUrl: './order-user-banner.component.html',
  styleUrls: ['./order-user-banner.component.scss'],
})
export class OrderUserBannerComponent implements OnInit {

  @Input() candidateID: string;
  candidate: any;
  constructor(public profileService: ProfileFacadeService) { }

  async ngOnInit() {
    this.candidate = await this.profileService.getUserById(this.candidateID);
  }

}
