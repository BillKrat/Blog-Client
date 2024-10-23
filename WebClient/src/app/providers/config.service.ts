import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonService } from '../sharedModule/providers/json.service';
import { Subject } from 'rxjs';
import { EncryptionService } from '../sharedModule/providers/encryption.service';
import { ConstantService } from '../sharedModule/providers/constant.service';
import { provideAuth0 } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  settings$ = new Subject<Map<string,any>>();

  constructor(
    private http: HttpClient,
    private jsonSvc: JsonService,
    private constantsSvc: ConstantService,
    private encryptSvc: EncryptionService
  ) { }

  loadConfig() {
    // Get the dev/prod file based on the production flag
    this.http.get(environment.production 
        ? 'assets/config_prod.json'
        : 'assets/config_dev.json')
      .subscribe((dataFileContents:any)=> {
          // If in production then our dataFileContents are encrypted
          var configData = environment.production
            ? this.encryptSvc.decrypt(dataFileContents["data"])
            : dataFileContents;

          // Merge data from configData into the existing environment data
          const envData = this.jsonSvc.mergeData(environment, configData);      

          let domain = envData.get(this.constantsSvc.auth_domain);
          let clientId = envData.get(this.constantsSvc.auth_clientId);
          let audience = envData.get(this.constantsSvc.auth_authorizationParams_audience);
          let redirect_uri = envData.get(this.constantsSvc.auth_authorizationParams_redirect_uri);
          
          environment.auth.domain = domain;
          environment.auth.clientId = clientId;
          environment.auth.authorizationParams.audience = audience;
          environment.auth.authorizationParams.redirect_uri = redirect_uri;

          provideAuth0({
            domain: environment.auth.domain, // 'dev-a0hjb1v0jos2opg2.us.auth0.com',
            clientId: environment.auth.clientId, //'vccpAHztTEWWkYWqiJ19SE02jtJUGrdT',
            authorizationParams: {
              audience: environment.auth.authorizationParams.audience, // "https://dev-a0hjb1v0jos2opg2.us.auth0.com/api/v2/",
              redirect_uri: environment.auth.authorizationParams.redirect_uri //"https://localhost:4200"
            }
          });
          
          this.settings$.next(envData); // raise config data event
      });
  }

}


