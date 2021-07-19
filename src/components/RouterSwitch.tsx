import React from "react";
import { Route, Switch } from "react-router-dom";
import SensorDetail from "./SensorDetail";
import SensorList from "./SensorList";

function RouterSwitch() {
  return (
    <Switch>
      <Route exact path="/:id" component={SensorDetail} />
      <Route component={SensorList} />
    </Switch>
  );
}

export default RouterSwitch;
