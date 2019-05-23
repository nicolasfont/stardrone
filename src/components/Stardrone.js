import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExperimentInSpace from './components/ExperimentInSpace';

export default ExperimentInSpace() =>
  <Router>
    <Route path="/" exact component={ExperimentInSpace}/>
  </Router>;
