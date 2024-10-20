import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { flattenJsonData } from '../shared/utility/jsonUtils';
import * as CryptoJS from 'crypto-js';
import { ConfigConstants } from '../shared/constants/configConstants';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config$ = new Subject<Map<string,any>>();

  constructor(
    private http: HttpClient,
    private constants: ConfigConstants
  ) {}

  loadConfig() {
    // Get the dev/prod file based on the production flag
    this.http.get(environment.production 
      ? 'assets/config_prod.json'
      : 'assets/config_dev.json')
      .subscribe((input:any)=> {
          var data = input["data"];
          var id = this.constants.app_id;
          var configData = CryptoJS.AES.decrypt(data, id).toString(CryptoJS.enc.Utf8);

          // Merge data from above file into the existing environment
          let envData = this.mergeData(environment, configData);      
          this.config$.next(envData); // raise config data event
      });
  }

  mergeData(defaultEnvData:any, httpEnvData:any):any{
    let dict = new Map<string,any>();
    // defaultEnvData will be flattened and added to map
    flattenJsonData(defaultEnvData, "", (key,value,parent)=>{
      let dictKey = `${parent}${parent?":":""}${key}`;
      dict.set(dictKey,value);
    });
    // httpEnvData will stomp on defaultEnvData map values
    flattenJsonData(httpEnvData, "", (key,value,parent)=>{
      let dictKey = `${parent}${parent?":":""}${key}`;
      dict.set(dictKey,value);
    });
    return dict;
  }

}


