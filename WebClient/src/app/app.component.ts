import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from './providers/config.service';
import { ConstantService } from './sharedModule/providers/constant.service';
import { SecurityService } from './securityModule/providers/security.service';

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
    this.configSvc.settings$.subscribe(config =>{
      this.apiUrl = 
      `Production: ${config.get(this.constantSvc.production)} |  
        ${config.get(this.constantSvc.auth_authorizationParams_redirect_uri)}`;

    });
  }
}
