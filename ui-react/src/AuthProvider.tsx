import React, { useEffect, useState } from 'react';
import { userManager, defaultAuth, Props } from '@/auth';
import AuthContext from '@/AuthContext';

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
