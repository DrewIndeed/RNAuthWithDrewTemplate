import React, {createContext, useEffect} from 'react';
import {authenticatedSelector} from '../../features/auth/selectors';
import {useSelector} from 'react-redux';

export const AuthContext = createContext({isAuthenticated: null});

export const AuthProvider = ({children}) => {
  const authenticatedGrabber = useSelector(authenticatedSelector);

  // print current storage
  useEffect(() => {
    console.log('at auth provider', authenticatedGrabber);
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated: authenticatedGrabber}}>
      {children}
    </AuthContext.Provider>
  );
};
