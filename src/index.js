import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stardrone from './components/Stardrone';
import ExperimentInSpace from './ExperimentInSpace';

render(<Router>
  <Route path="/" exact component={ExperimentInSpace}/>
</Router>, document.getElementById("app"));
