import { createContext, useState } from "react";

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [ accesstokens, setAccessTokens ] = useState(null);
  return (
    <AuthContext.Provider value={{ accesstokens, setAccessTokens }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
