import {
  InMemoryWebStorage,
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from 'oidc-client';

const settings: UserManagerSettings = {
  authority: `${window.location.origin}/auth/realms/demo`,
  client_id: `demo`,
  redirect_uri: `${window.location.origin}/signin-callback.html`,
  silent_redirect_uri: `${window.location.origin}/silent-callback.html`,
  post_logout_redirect_uri: `${window.location.origin}`,
  response_type: 'code',
  automaticSilentRenew: true,
  monitorSession: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: new InMemoryWebStorage() }),
};

const userManager: UserManager = new UserManager(settings);

export default userManager;
