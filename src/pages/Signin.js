import axios from "axios";
import { Link } from "react-router-dom";
import "./Auth.css";
import { users } from "../backend/db/users";

export const Signin = () => {
  const signinAsGuestHandler = async () => {
    const { data } = await axios.post("/api/auth/login", {
      email: users[0].email,
      password: users[0].password,
    });
    localStorage.setItem("key", data.encodedToken);
  };
  return (
    <div className="signin-page">
      <h1 className="txt-center">Login to your account</h1>
      <form className="auth-form flex-column g-1 align-center justify-center">
        <label className="log-input">
          <input
            className="input log-input req-input"
            type="email"
            placeholder="Email"
            required
          />
          <span className="error">Please enter your email</span>
        </label>
        <label className="log-input">
          <input
            className="input log-input req-input"
            type="password"
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            required
          />
          <span className="error">
            Password must contain eight characters, at least one letter, one
            number and one special character
          </span>
        </label>
        <Link to="/">
          <button className="quiz-sec-btn" type="submit">
            Sign In
          </button>
        </Link>
        <Link to="/home">
          <span onClick={signinAsGuestHandler}>Sign In As Guest</span>
        </Link>
        <span className="or-divider">OR</span>
        <Link to="/signup">
          <button type="button" className="btn btn-secondary">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};
