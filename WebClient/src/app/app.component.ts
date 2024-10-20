import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ConfigConstants } from './shared/constants/configConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  apiUrl = "";
  title = 'WebClient';

  constructor(
    private services:ConfigService,
    private constants:ConfigConstants
  ){ }

  ngOnInit(){
    this.services.config$.subscribe(config =>{
      this.apiUrl = `Production: ${config.get(this.constants.production)} |  
      ${config.get(this.constants.auth_authorizationParams_redirect_uri)};`
    });
  }
}
