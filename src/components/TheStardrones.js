import React, { useEffect, useRef, useState } from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import Stardrone from "./Stardrone";
import Text from "./Text";
import image from "../images/TheStardrones.jpg";
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

const License = () => (
  <Div
    style={{ position: "absolute", right: 40, bottom: 40 }}
    title="This work is licensed under a Creative Commons Attribution 4.0 International License."
  >
    <a
      rel="license"
      href="http://creativecommons.org/licenses/by/4.0/"
      target="_blank"
    >
      <img
        alt="Creative Commons License"
        style={{ borderWidth: 0 }}
        src="https://i.creativecommons.org/l/by/4.0/88x31.png"
      />
    </a>
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

const useToggle = initialState => {
  const [toggle, setToggle] = useState(initialState);
  return [toggle, () => setToggle(!toggle)];
};

export default () => {
  const [rotation, rotate] = useRotation([0, 1, 2]);
  return (
    <Body title="The Stardrones">
      <HomeLink
        to="/nicolasfont"
        title="Music, film, visuals, and code by Nicolás Font except where noted"
      />
      <License />
      <Div centered flex={1}>
        <Div onClick={rotate} style={{ cursor: "pointer" }}>
          {
            [
              <Div>
                <Div style={{ padding: 16 }}>
                  <img
                    title="The Tremecula Dance means this is a gift to you. All my work here is free. Please use it in yours. And you dance it like this..."
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
                <Link to="/thestardrones">Here To Fuck Shit Up</Link>
                <Link to="/thestardrones">The Gazing Hour</Link>
              </Div>,
              <Div centered flex={1}>
                <Text>the universe is not real and it is ok</Text>
              </Div>
            ][rotation]
          }
        </Div>
      </Div>
    </Body>
  );
};
