import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { provideHttpClient } from '@angular/common/http';

export function initializeApp(configService: ConfigService) {
    return ()=>configService.loadConfig().subscribe((config)=>{
      configService.setConfig(config);
    });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    {
      provide:APP_INITIALIZER,
      useFactory: initializeApp,
      deps:[ConfigService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
