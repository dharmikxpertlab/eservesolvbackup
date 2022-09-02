import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration-successful',
  templateUrl: './registration-successful.page.html',
  styleUrls: ['./registration-successful.page.scss'],
})
export class RegistrationSuccessfulPage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

}
