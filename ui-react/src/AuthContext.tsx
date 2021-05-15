import { Auth } from '@/auth';
import { createContext } from 'react';

const AuthContext = createContext<Auth | undefined>(undefined);

export default AuthContext;
