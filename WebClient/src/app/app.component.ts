import { Component, inject, OnInit } from '@angular/core';
import { ConfigService } from './providers/config.service';
import { ConstantService } from './modules/sharedModule/providers/constant.service';
import { environment } from '../environments/environment';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  apiUrl = "";
  title = 'World!';

  constructor(
    private configSvc:ConfigService,
    private constantSvc:ConstantService,
    private primengConfig: PrimeNGConfig
  ){ }

  ngOnInit(){
      let config = this.configSvc.envData;

      this.apiUrl = 
      `Production: ${environment.production} |  
        ${environment.auth.authorizationParams.redirect_uri}`;

      this.primengConfig.ripple = true;
      this.primengConfig.zIndex = {
        modal: 1100,    // dialog, sidebar
        overlay: 1000,  // dropdown, overlaypanel
        menu: 1000,     // overlay menus
        tooltip: 1100   // tooltip
      };
      this.primengConfig.filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
      };
      this.primengConfig.setTranslation({
        accept: 'Accept',
        reject: 'Cancel',
        //translations
      });

       console.log('app.component:',config); 
  }
}
