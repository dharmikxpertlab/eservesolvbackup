import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutFacadeService } from './logout-facade.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(
    public logoutFacadeService: LogoutFacadeService,
    public router: Router
  ) { }

  async ionViewDidEnter() {
    await this.logoutFacadeService.logout();
    this.router.navigate(['/']);
  }

}
