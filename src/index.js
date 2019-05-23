import hash from "object-hash";
import React, { createContext, useContext, useState } from "react";
import { render } from "react-dom";
import ExperimentInSpace from './components/ExperimentInSpace';

render(<ExperimentInSpace />, document.getElementById("app"));
