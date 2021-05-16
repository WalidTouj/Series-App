import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import BreakingBad from "./BreakingBad";
import "./Series.css";
import Details from "./component/Details/Card-Details.component";

function Series() {
  return (
    <div className="Mserie">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/BreakingBad" component={BreakingBad} />
        <Route path="/Details/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default Series;
