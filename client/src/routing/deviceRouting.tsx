import React from 'react';
import { Switch, HashRouter as Router, Redirect, Route } from 'react-router-dom';
import Devices from '../container/Devices/Devices';
import DeviceDetails from '../container/Devices/DeviceDetails';

function DeviceRouting() {
  return (
  <Router>
    <Switch>
      <Route
        path="/devices"
        exact
        component={Devices}
      />
      <Route
        path="/devices/:deviceId"
        exact
        component={DeviceDetails}
      />
      <Redirect from="*" to="/devices" />
    </Switch>
  </Router>
  );
}

export default DeviceRouting;
