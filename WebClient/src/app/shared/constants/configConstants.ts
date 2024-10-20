import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigConstants {
    public production =  "production";
    public auth_cacheMode =  "auth:cacheMode";
    public auth_authorizationParams_audience =  "auth:authorizationParams:audience";
    public auth_authorizationParams_scope =  "auth:authorizationParams:scope";
    public auth_authorizationParams_redirect_uri =  "auth:authorizationParams:redirect_uri";
    public auth_timeoutInSeconds =  "auth:timeoutInSeconds";
    public auth_detailedResponse =  "auth:detailedResponse";
    public auth_domain =  "auth:domain";
    public auth_clientId =  "auth:clientId";
    public auth_apiUri =  "auth:apiUri";
    public auth_errorPath =  "auth:errorPath";
    public httpInterceptor_allowedList =  "httpInterceptor:allowedList";
}