import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SecurityService } from '../providers/security.service';

@Component({
  imports:[CommonModule],
  selector: 'app-user-profile',
  template: `
    <span *ngIf="authSvc.user$ | async as user">
      <b>Auth0 payload:</b><i>{{ id }}</i>
    </span>
  `,
  standalone: true
})

export class UserProfileComponent {
  public id: string | undefined;

  constructor(
    public authSvc: AuthService,
    public securitySvc: SecurityService ) 
  {
    console.log("UserProfileComponent");
    
    authSvc.user$.subscribe((value:any)=>{
        if(authSvc.isAuthenticated$ && value?.sub){
          this.id = `${value.sub}`;
          securitySvc.bearerToken$.next(this.id);
        }
    })
  }
}

