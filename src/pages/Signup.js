import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";
export const Signup = () => {
  const { signupClickHandler } = useAuth();
  return (
    <div className="signin-page">
      <h1 className="txt-center">Sign Up to HubNote</h1>
      <form className="auth-form flex-column g-1 align-center justify-center">
        <label className="log-input">
          <input
            className="input log-input req-input"
            type="text"
            placeholder="Name"
            required
          />
          <span className="error">Please enter your name</span>
        </label>
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
        <label className="log-input">
          <input
            className="input log-input req-input"
            type="password"
            placeholder="Confirm Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            required
          />
          <span className="error">
            Password must contain eight characters, at least one letter, one
            number and one special character
          </span>
        </label>
        <Link to="/home">
          <button
            className="quiz-sec-btn"
            type="submit"
            onClick={signupClickHandler}
          >
            Sign Up
          </button>
        </Link>
        <span className="or-divider">OR</span>
        <Link to="/">
          <button type="button" className="btn btn-secondary">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
};
