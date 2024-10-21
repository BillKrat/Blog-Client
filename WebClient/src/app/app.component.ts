import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from './providers/config.service';
import { ConstantService } from './sharedModule/providers/constant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  apiUrl = "";
  title = 'WebClient';

  constructor(
    private config:ConfigService,
    private constants:ConstantService
  ){ }

  ngOnInit(){
    this.config.settings$.subscribe(config =>{
      this.apiUrl = `Production: ${config.get(this.constants.production)} |  
      ${config.get(this.constants.auth_authorizationParams_redirect_uri)};`
    });
  }
}
