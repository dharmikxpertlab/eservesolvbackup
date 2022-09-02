import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutFacadeService {

  constructor(
    public authService: AuthService
  ) { }

  async logout() {
    await this.authService.logout();
  }
}
