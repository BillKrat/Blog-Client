import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from '../providers/security.service';
import { environment } from '../../../environments/environment';

@Component({
  imports:[CommonModule],
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ logoutParams: { returnTo: returnToUrl } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  standalone: true
})
export class AuthButtonComponent {
  constructor(public auth: SecurityService) {
    console.log("AuthButtonComponent");
  }
  public returnToUrl:string = environment.auth.authorizationParams.redirect_uri
  
}