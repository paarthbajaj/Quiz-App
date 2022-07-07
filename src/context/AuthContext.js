import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../backend/db/users";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [toast, setToast] = useState({
    showToast: true,
    type: "",
    message: "",
  });
  let navigate = useNavigate();
  const signInAsGuest = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        email: users[0].email,
        password: users[0].password,
      });
      localStorage.setItem("key", res.data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };
  const signupClickHandler = async () => {
    try {
      const signupRes = await axios.post("/api/auth/signup", {
        email: authState.email,
        password: authState.password,
        name: authState.name,
        confirm_password: authState.confirm_password,
      });
      localStorage.setItem("key", signupRes.data.encodedToken);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const signinClickHandler = async () => {
    try {
      const signinRes = await axios.post("/api/auth/login", {
        email: authState.email,
        password: authState.password,
      });
      localStorage.setItem("key", signinRes.data.encodedToken);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setToast({
        ...toast,
        showToast: true,
        type: "alert-danger",
        message: err.response.data.errors[0],
      });
    }
  };
  const authReducer = (state, action) => {
    switch (action.type) {
      case "EDIT_NAME":
        return { ...state, name: action.payload };
      case "EDIT_EMAIL":
        return { ...state, email: action.payload };
      case "EDIT_PASSWORD":
        return { ...state, password: action.payload };
      case "EDIT_CONFIRM_PASSWORD":
        return { ...state, confirm_password: action.payload };
    }
  };
  const [authState, authDispatch] = useReducer(authReducer, {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  return (
    <AuthContext.Provider
      value={{
        signInAsGuest,
        signupClickHandler,
        signinClickHandler,
        authState,
        authDispatch,
        toast,
        setToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthContextProvider };
