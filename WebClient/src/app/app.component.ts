import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  apiUrl = "";
  title = 'WebClient';

  constructor(private services:ConfigService){ }

  ngOnInit(){
    this.services.config$.subscribe(config=>{
      this.apiUrl = JSON.stringify(config);
    });
  }
}
