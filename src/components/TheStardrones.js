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

const useToggle = initialState => {
  const [toggle, setToggle] = useState(initialState);
  return [toggle, () => setToggle(!toggle)];
};

export default ({ playing, play }) => {
  const [flipped, flip] = useToggle(false);
  return (
    <Body title="The Stardrones">
      <HomeLink
        to="/nicolasfont"
        title="Music, film, visuals, and code by Nicolás Font except where noted"
      />
      <Div centered flex={1}>
        <Div onClick={flip} style={{ cursor: "pointer" }}>
          {flipped ? (
            <Div>
              <Link to="/thestardrones">The Tremecula Dance</Link>
              <Link to="/thestardrones">Something Like A Spaceship</Link>
              <Link to="/thestardrones">Les Trous Noirs N'Existent Pas</Link>
              <Link to="/thestardrones">Here To Fuck Shit Up</Link>
              <Link to="/thestardrones">The Gazing Hour</Link>
            </Div>
          ) : (
            <>
              <Div style={{ padding: 16 }}>
                <img
                  title="The Tremecula Dance means this is a gift to you. All my art is public domain. Please use it in yours. And you dance it like this..."
                  src={image}
                  width={size}
                  height={size}
                />
              </Div>
              <Div style={{ padding: 16 }}>
                <Link>The Stardrones</Link>
              </Div>
            </>
          )}
        </Div>
      </Div>
    </Body>
  );
};
