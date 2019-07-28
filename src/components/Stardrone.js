import React from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
import Div from "./Div";
import License from "./License";
import Text from "./Text";
import HomeLink from "./HomeLink";
import image from "../images/12524041_10153845708099354_6990004252861025374_n.jpg";

export default () => (
  <Body title="Stardrone">
    <Div centered flex={1}>
      <HomeLink />
      <Div style={{ fontFamily: "Impact", fontSize: 48, fontStyle: "italic" }}>
        STARDRONE.ONLINE
      </Div>
      <Div>
        <Text>
          Music, film, visual art, and code by Nicolás Font except where noted.
        </Text>
      </Div>
      <Div>
        <Link to="/nicolasfont">
          <img
            title="Nicolás Font"
            src={image}
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </Div>
      <License />
    </Div>
  </Body>
);
