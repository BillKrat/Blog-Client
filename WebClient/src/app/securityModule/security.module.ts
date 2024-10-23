import { NgModule } from '@angular/core';
import { SharedModule } from '../sharedModule/shared.module';
import { SecurityService } from './providers/security.service';
import { UserProfileComponent } from './components/user.profile.component';
import { AuthButtonComponent } from './components/auth.button.component';
import { provideAuth0 } from '@auth0/auth0-angular';

/*   Prerequisites
     =============
     npm i @auth0/auth0-angular    */

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AuthButtonComponent,
    UserProfileComponent
  ],
  exports:[
    AuthButtonComponent,
    UserProfileComponent
  ],
  providers:[
    SecurityService,
    provideAuth0({
      domain: 'dev-a0hjb1v0jos2opg2.us.auth0.com',
      clientId: 'vccpAHztTEWWkYWqiJ19SE02jtJUGrdT',
      authorizationParams: {
        audience: "https://dev-a0hjb1v0jos2opg2.us.auth0.com/api/v2/",
        redirect_uri: "https://localhost:4200"
      }
    }),
  ]
})

export class SecurityModule { 
  constructor(){
    console.log('security module:',this);
  }  
}
