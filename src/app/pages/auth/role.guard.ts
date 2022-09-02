import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs';
import { RolesEnum } from 'src/api/models';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    public ngxPermissionsService: NgxPermissionsService,
    public authService: AuthService,
    public router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (async () => {
      await this.authService.assignPermissions();
      const permissions = await this.ngxPermissionsService.getPermissions();

      if (Object.keys(permissions).indexOf(RolesEnum.Customer) > -1) {
        this.router.navigate(['/customers/dashboard']);
        return false;
      }

      if (Object.keys(permissions).indexOf(RolesEnum.SpEmployee) > -1) {
        this.router.navigate(['/technicians/dashboard']);
        return false;
      }

      return true;
    })();
  }

}
