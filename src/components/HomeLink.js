import React from "react";
import Div from "./Div";
import image from "../images/12524041_10153845708099354_6990004252861025374_n.jpg";
import { Link } from "react-router-dom";

export default ({ to }) => (
  <Div>
    <Link to={to}>
      <img
        title="Music, film, visuals, and code by Nicolás Font"
        src={image}
        width={40}
        height={40}
        style={{ position: "absolute", left: 40, top: 40, borderRadius: "50%" }}
      />
    </Link>
  </Div>
);
