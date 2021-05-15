import React, { useState } from 'react';
import logo from '@/logo.svg';
import { Link } from 'react-router-dom';
import AuthContext from '@/AuthContext';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
            <p>
              <button onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </button>
              <Link to="/secured">
                <button type="button">Secured</button>
              </Link>
              {context?.isAuthenticated ? (
                <button onClick={() => context.userManager?.signoutRedirect()}>
                  Logout
                </button>
              ) : null}
            </p>
            <p>
              Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              {' | '}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
            </p>
          </header>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default Home;
