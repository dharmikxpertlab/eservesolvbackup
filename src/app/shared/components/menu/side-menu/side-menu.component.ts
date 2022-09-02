import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subscription } from 'rxjs';
import { appPages } from 'src/app/shared/components/menu/side-menu/side-menu.component.config';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit, OnDestroy {

  public appPages = appPages;
  loginSubscription: Subscription;
  loggedIn = false;

  constructor(
    public authService: AuthService,
    public permissionsService: NgxPermissionsService,
  ) { }


  ngOnInit() {
    this.loginSubscription = this.authService.isAuthenticated$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

}
