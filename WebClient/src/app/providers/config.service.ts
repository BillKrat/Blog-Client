import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonService } from '../modules/sharedModule/providers/json.service';
import { EncryptionService } from '../modules/sharedModule/providers/encryption.service';
import { ConstantService } from '../modules/sharedModule/providers/constant.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  settings:any;
  envData:any;

  constructor(
    private http: HttpClient,
    private jsonSvc: JsonService,
    private constantsSvc: ConstantService,
    private encryptSvc: EncryptionService
  ) { }

  loadConfig() {
    // Get the dev/prod file based on the production flag
    // await this.http.get(environment.production 
    //     ? 'assets/config_prod.json'
    //     : 'assets/config_dev.json').toPromise()
    //   .then((dataFileContents:any)=> {
    //       // If in production then our dataFileContents are encrypted
    //       var configData = environment.production
    //         ? this.encryptSvc.decrypt(dataFileContents["data"])
    //         : dataFileContents;

    //       // Merge data from configData into the existing environment data
    //       this.envData = this.jsonSvc.mergeData(environment, configData);      

    //       let domain = this.envData.get(this.constantsSvc.auth_domain);
    //       let clientId = this.envData.get(this.constantsSvc.auth_clientId);
    //       let audience = this.envData.get(this.constantsSvc.auth_authorizationParams_audience);
    //       let redirect_uri = this.envData.get(this.constantsSvc.auth_authorizationParams_redirect_uri);
          
    //       environment.auth.domain = domain;
    //       environment.auth.clientId = clientId;
    //       environment.auth.authorizationParams.audience = audience;
    //       environment.auth.authorizationParams.redirect_uri = redirect_uri;
         
    //   });
    //   this.settings = this.envData; // raise config data event
  }
}


