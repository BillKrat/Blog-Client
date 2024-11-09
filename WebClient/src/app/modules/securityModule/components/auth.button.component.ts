import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from '../providers/security.service';
import { environment } from '../../../../environments/environment';

@Component({
  imports:[CommonModule],
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <a class="pill" rel="noopener" (click)="auth.logout({ logoutParams: { returnTo: returnToUrl } })">
        &nbsp;Log out&nbsp;
      </a>
    </ng-container>
    <ng-template #loggedOut>
      <a class="pill"  rel="noopener" (click)="auth.loginWithRedirect()">
        &nbsp;Log in&nbsp;
      </a>
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