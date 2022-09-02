import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApprovalGuard } from './approval.guard';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(
    private authGuard: AuthGuard,
    private roleGuard: RoleGuard,
    private approvalGuard: ApprovalGuard
  ) { }

  public async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    for (const guard of this.getOrderedGuards()) {
      if (await guard.canActivate(next, state) === false) {
        return false;
      }
    }
    return true;
  }

  private getOrderedGuards(): CanActivate[] {
    return [
      this.authGuard,
      this.roleGuard,
      this.approvalGuard
    ];
  }

}
