import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    environment.auth.apiUri = "Hello world";
    return this.http.get('auth_config_dev.json');
  }

  getConfig(key: string): any {
    return this.config ? this.config[key] : null;
  }

  setConfig(config: any): void {
    this.config = config;
  }

  getEnv():any{
    return environment;
  }
}
