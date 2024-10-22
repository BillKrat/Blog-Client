import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonService } from '../sharedModule/providers/json.service';
import { Subject } from 'rxjs';
import { EncryptionService } from '../sharedModule/providers/encryption.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  settings$ = new Subject<Map<string,any>>();

  constructor(
    private http: HttpClient,
    private jsonSvc: JsonService,
    private encryptSvc: EncryptionService
  ) {}

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
          let envData = this.jsonSvc.mergeData(environment, configData);      

          environment.auth.domain = configData.domain;
          environment.auth.clientId = configData.clientId;
          environment.auth.authorizationParams.redirect_uri = configData.auth.authorizationParams.redirect_uri;

          this.settings$.next(envData); // raise config data event
      });
  }

}


