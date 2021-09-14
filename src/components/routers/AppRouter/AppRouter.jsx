import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JournlaScreen from "../../journal/JournalScreen";
import AuthRouter from "../AuthRouter";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={JournlaScreen} exact />
          <Route path="/auth" component={AuthRouter} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
