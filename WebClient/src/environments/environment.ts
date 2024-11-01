//import env from './config_prod.json'
import env from '../../public/assets/config_prod.json';
import {decrypt} from '../app/modules/sharedModule/providers/encryption.service'

// Import content from auth_config_dev.json file
const { cacheMode, authorizationParams: { redirect_uri, scope, audience }, 
        timeoutInSeconds, detailedResponse, domain, clientId,  apiUri, errorPath } = env as {
    cacheMode: string, authorizationParams: {redirect_uri?: string, scope?: string, audience?: string },
    timeoutInSeconds: number, detailedResponse: boolean, domain: string, clientId: string,
    apiUri: string, errorPath: string
};

// Populate exported values for client use
export const environment = {
  production: true,
  auth: {
    //--------[ GetTokenSilentlyOptions format follows ]---------------------------------------------------------------
    cacheMode : env.cacheMode,  // 'on' | 'off' 'cache_only'
    authorizationParams: {
      audience: decrypt('audience',env.authorizationParams.audience),         // The audience that was used in the authentication request
      scope : env.authorizationParams.scope,              // The scope that was used in the authentication request
      redirect_uri: env.authorizationParams.redirect_uri, // required
    },
    timeoutInSeconds : env.timeoutInSeconds, // A maximum number of seconds to wait before declaring the background /authorize call as failed for timeout
    detailedResponse : env.detailedResponse, // false default: - If true, the full response from the /oauth/token endpoint (or the cache) is returned (minus `refresh_token` if one was issued). Otherwise, just the access token is returned.
    //---------[ GetTokenSilentlyOptions ]-----------------------------------------------------------------------------
    domain : decrypt('domain',env.domain),
    clientId : decrypt('clientId',env.clientId),
    apiUri: env.apiUri,
    errorPath: env.errorPath    
  },
  httpInterceptor: { allowedList: [`${apiUri}/*`] }
};
