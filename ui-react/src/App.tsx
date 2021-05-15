import React from 'react';
import '@/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '@/Home';
import Secured from '@/Secured';
import AuthContext from '@/AuthContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/secured"
          render={() => (
            <AuthContext.Consumer>
              {(context) =>
                !context?.isAuthenticated ? (
                  <Redirect to="/auth" />
                ) : (
                  <Secured />
                )
              }
            </AuthContext.Consumer>
          )}
        />

        <Route
          path="/auth"
          render={() => (
            <AuthContext.Consumer>
              {(context) => {
                localStorage.setItem('route', '/secured');
                context?.userManager?.signinRedirect();
                return null;
              }}
            </AuthContext.Consumer>
          )}
        />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
