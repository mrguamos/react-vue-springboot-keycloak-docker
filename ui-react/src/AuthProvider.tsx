import React, { ReactNode, useEffect, useState } from 'react';
import { userManager, defaultAuth } from '@/auth';
import AuthContext from '@/AuthContext';

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(defaultAuth);
  useEffect(() => {
    userManager
      .signinSilent()
      .then(() => {
        setAuth({ ...auth, isAuthenticated: true, isLoading: false });
      })
      .catch(() => {
        setAuth({ ...auth, isLoading: false });
      });
  }, []);
  return (
    <AuthContext.Provider value={auth}>
      {auth.isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
