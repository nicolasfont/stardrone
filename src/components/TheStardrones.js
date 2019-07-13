import React, { useEffect, useRef, useState } from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import License from "./License";
import Music from "./Music";
import Stardrone from "./Stardrone";
import Text from "./Text";
import image from "../images/The Stardrones.jpg";
import { useRotation } from "../hooks";

const Link = ({ children, style, ...props }) => (
  <Div
    style={{
      color: "black",
      fontFamily: "Amsterdam",
      textDecoration: "none",
      fontSize: "16px",
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
// scale
// filter photo
// git live
// keep playing

export default () => {
  const [rotation, rotate] = useRotation([0, 1, 2]);
  return (
    <Body title="The Stardrones">
      <HomeLink to="/" title="STARDRONE" />
      <Div alignItems="center" justifyContent="center" flex={1}>
        <Div onClick={rotate} style={{ cursor: "pointer" }}>
          {
            [
              <Div>
                <Div justifyContent="center" row style={{ padding: 16 }}>
                  <img
                    title="The Tremecula Dance"
                    src={image}
                    width={size}
                    height={size}
                  />
                </Div>
                <Div style={{ padding: 16 }}>
                  <Link style={{ fontSize: "1.3rem" }}>The Stardrones</Link>
                </Div>
              </Div>,
              <Div>
                <Link to="/thestardrones">The Tremecula Dance</Link>
                <Link to="/thestardrones">Something Like A Spaceship</Link>
                <Link to="/thestardrones">Les Trous Noirs N'Existent Pas</Link>
                <Link
                  to="/thestardrones"
                  style={{
                    fontFamily: "Impact",
                    fontSize: 26,
                    paddingBottom: 12,
                    margin: 4
                  }}
                >
                  189624370189624370
                </Link>
                <Link to="/thestardrones">The Gazing Hour</Link>
              </Div>,
              <Div flex={1}>
                <Text>the universe is not real and it`s ok</Text>
              </Div>
            ][rotation]
          }
        </Div>
      </Div>
    <License />
    </Body>
  );
};
