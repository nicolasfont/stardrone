import React from "react";
import Div from "./components/Div";
import image from "./images/12524041_10153845708099354_6990004252861025374_n.jpg";

export default () => (
  <Div style={{ position: "absolute" }}>
    <Link to="/">
      <img src={image} width={40} height={40} style={{ borderRadius: "50%" }} />
    </Link>
  </Div>
);
