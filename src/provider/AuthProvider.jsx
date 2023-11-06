import Cookies from 'js-cookie';
import { createContext, useState } from 'react';
import { TOKEN } from '../app.constants';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN));

  return (
    <>
      <AuthContext.Provide value={{ isAuth, setIsAuth }}>
        {children}
      </AuthContext.Provide>
    </>
  );
};

export default AuthProvider;
