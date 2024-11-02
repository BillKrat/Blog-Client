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
        <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14" fill="currentColor">
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"  />
        </svg>
      </a>
    </ng-container>
    <ng-template #loggedOut>
      <a class="pill"  rel="noopener" (click)="auth.loginWithRedirect()">
        &nbsp;Log in&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14" fill="currentColor">
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"  />
        </svg>
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