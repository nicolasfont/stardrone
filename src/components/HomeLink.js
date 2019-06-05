import React from "react";
import Div from "./Div";
import image from "../images/12524041_10153845708099354_6990004252861025374_n.jpg";
p
import { Link as BaseLink } from "react-router-dom";

export default ({ style }) => (
  <Div style={{ position: "absolute", ...style }}>
    <Link to="/">
      <img src={image} width={40} height={40} style={{ borderRadius: "50%" }} />
    </Link>
  </Div>
);
