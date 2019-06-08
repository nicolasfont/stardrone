import React from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import image from "../images/TheStardrones.jpg";
import soundtrack from "../sounds/The Stardrones - The Tremecula Dance.mp3";

const Link = ({ children, ...props }) => (
  <Div
    style={{
      color: "black",
      fontFamily: "Amsterdam",
      textDecoration: "none",
      fontSize: "16px",
      padding: 0,
      margin: 0
    }}
    {...props}
  >
    {children}
  </Div>
);

const size = 300;

// gapless loop
// mute
// links
// responsive
// https
// Creative Commons
// round favicon
// CDN
// mobile audio
// fade in audio
// pm2

export default () => (
  <Body title="The Stardrones">
    <Div centered flex={1}>
      <HomeLink />
      <Div centered>
        <Div centered flex={1}>
          <img
            title="The Tremecula Dance"
            src={image}
            width={size}
            height={size}
          />
        </Div>
        <Div centered style={{ padding: 28 }}>
          <Link to="/">The Stardrones</Link>
        </Div>
        <audio autoPlay loop src={soundtrack} />
      </Div>
    </Div>
  </Body>
);
