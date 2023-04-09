import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();
  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    if (data.email === "" || data.password === "") {
      return alert("All fields are required!");
    } else {
      try {
        authService
          .login(data)
          .then((userData) => {
            setAuth(userData);
            navigate("/catalog");
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  };

  const onRegisterSubmit = async (values) => {
    if (values.email === "" || values.password === "" || values.rePassword === "") {
      return alert("All fields are required!");
    } else if (values.password !== values.rePassword) {
      return alert("Passwords don't match!");
    } else {
      try {
        authService
          .register(values)
          .then((userData) => {
            setAuth(userData);
            navigate("/catalog");
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
