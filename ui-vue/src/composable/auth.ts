import { reactive, ref } from '@vue/reactivity';
import {
  InMemoryWebStorage,
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from 'oidc-client';

const settings: UserManagerSettings = {
  authority: `http://localhost:8080/auth/realms/demo`,
  client_id: `demo-vue`,
  redirect_uri: `${window.location.origin}/signin-callback.html`,
  silent_redirect_uri: `${window.location.origin}/silent-callback.html`,
  post_logout_redirect_uri: `${window.location.origin}`,
  response_type: 'code',
  automaticSilentRenew: true,
  monitorSession: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: new InMemoryWebStorage() }),
};

const isAuthenticated = ref(false);
const userManager: UserManager = reactive(new UserManager(settings));

const useAuth = () => {
  return { isAuthenticated, userManager };
};

export default useAuth;
