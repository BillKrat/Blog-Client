import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly configService = inject(ConfigService);
  apiUrl = "";
  title = 'WebClient';

  constructor(){
    console.log("hello");
  }
  ngOnInit(){
    this.apiUrl = this.configService.getEnv().auth.apiUri;
  }
}
