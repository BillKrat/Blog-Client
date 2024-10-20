import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config$ = new BehaviorSubject(environment);

  constructor(private http: HttpClient) {}

  loadConfig() {
    this.http.get(environment.production 
      ? 'assets/config_prod.json'
      : 'assets/config_dev.json').subscribe((data:any)=>
        {
          let envData = environment;
          envData.auth = data;      
          this.config$.next(envData)
        });
  }
}
