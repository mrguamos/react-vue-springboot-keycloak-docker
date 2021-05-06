import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import userManager from '@/auth';
import App from '@/App';

(async () => {
  try {
    await userManager.signinSilent();
  } catch (error) {
    await userManager.signinRedirect();
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
