import React, { useEffect, useRef, useState } from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import Stardrone from "./Stardrone";
import image from "../images/TheStardrones.jpg";

const Link = ({ children, style, ...props }) => (
  <Div
    style={{
      color: "black",
      fontFamily: "Amsterdam",
      textDecoration: "none",
      fontSize: "1.3rem",
      padding: 0,
      margin: 0,
      ...style
    }}
    {...props}
  >
    {children}
  </Div>
);

const size = 300;

// TODO
// gapless loop
// pause
// links
// responsive
// https
// Creative Commons
// round favicon
// CDN
// mobile audio
// fade in audio
// pm2
// scale
// filter photo
// git live
// keep playing

export default ({ playing, play }) => {
  return (
    <Body title="The Stardrones">
      <HomeLink />
        <Div centered flex={1}>
          <Div style={{ padding: 16 }}>
            <img
              title="The Tremecula Dance"
              src={image}
              width={size}
              height={size}
            />
          </Div>
          <Div style={{ padding: 16 }}>
            <Link>The Stardrones</Link>
          </Div>
      </Div>
    </Body>
  );
};
