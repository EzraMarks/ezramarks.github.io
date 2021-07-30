import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { ResumePage } from "./ResumePage";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/resume" exact component={ResumePage} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </HashRouter>
  );
};

export default App;
