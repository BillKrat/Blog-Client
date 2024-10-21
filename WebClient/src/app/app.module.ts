import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './providers/config.service';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from './sharedModule/shared.module';

export function initializeApp(configService: ConfigService) {
    return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
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
