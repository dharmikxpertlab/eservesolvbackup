import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return (async () => {
      const isLoggedIn = await this.authService.isAuthenticated();
      if (!isLoggedIn) {
        await this.router.navigate(['/auth', 'login'], {
          queryParams: {
            navigateTo: state.url
          }
        });
      }
      return Boolean(isLoggedIn);
    })();
  }
}
