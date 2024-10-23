import { NgModule } from '@angular/core';
import { SharedModule } from '../sharedModule/shared.module';
import { SecurityService } from './providers/security.service';
import { UserProfileComponent } from './components/user.profile.component';
import { AuthButtonComponent } from './components/auth.button.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

/*   Prerequisites
     =============
     npm i @auth0/auth0-angular    */

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AuthButtonComponent,
    UserProfileComponent,
    AuthModule.forRoot(environment.auth)
  ],
  exports:[
    AuthButtonComponent,
    UserProfileComponent
  ],
  providers:[ SecurityService ]
})

export class SecurityModule {
  constructor(){
    console.log("SecurityModule")
  }
}
