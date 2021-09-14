import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../../auth/LoginScreen";
import RegisterScreen from "../../auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={LoginScreen} exact />
        <Route path="/auth/signin" component={RegisterScreen} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
