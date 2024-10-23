import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from './providers/config.service';
import { ConstantService } from './sharedModule/providers/constant.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  apiUrl = "";
  title = 'WebClient';

  constructor(
    private configSvc:ConfigService,
    private constantSvc:ConstantService
  ){ }

  ngOnInit(){
      let config = this.configSvc.envData;

      this.apiUrl = 
      `Production: ${environment.production} |  
        ${environment.auth.authorizationParams.redirect_uri}`;

       console.log('app.component:',config); 
  }
}
