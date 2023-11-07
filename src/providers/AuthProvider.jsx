import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

import { TOKEN } from '../app.constants';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN));

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
