import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovalGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return (async () => {
      const user = await this.authService.getUserInfo();
      if (!user.net_approval) {
        await this.authService.logout();

        await this.router.navigate(['/auth', 'register', 'awaiting-approval'], {
          queryParams: {
            navigateTo: state.url
          }
        });

        return false;
      }

      return true;
    })();
  }

}
