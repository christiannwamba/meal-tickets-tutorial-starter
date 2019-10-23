import { Auth, AUTH_STRATEGIES } from '@8base/auth';

const AUTH0_CLIENT_ID = 'AUTH_CLIENT_ID';
const AUTH0_CLIENT_DOMAIN = 'secure.8base.com';
export const AUTH_PROFILE_ID = 'AUTH_PROFILE_ID';

const REDIRECT_URI = `${document.location.origin}/auth/callback`;

export const authClient = Auth.createClient({
  strategy: AUTH_STRATEGIES.WEB_AUTH0,
  subscribable: true,
}, {
  clientId: AUTH0_CLIENT_ID,
  domain: AUTH0_CLIENT_DOMAIN,
  // Don't forget set custom domains in the authentication settings!
  redirectUri: REDIRECT_URI,
  logoutRedirectUri: document.location.origin,
});
