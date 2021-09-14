import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__tittle">Login</h3>
      <form action="">
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>
        <hr />
      </form>
      <Link to="/auth/login" className="link">
        Already registered?
      </Link>
    </>
  );
};

export default RegisterScreen;
