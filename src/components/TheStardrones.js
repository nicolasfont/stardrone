import React, { useEffect, useRef, useState } from "react";
import Body from "./Body";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Music from "./Music";
import image from "../images/TheStardrones.jpg";
import soundtrack from "../sounds/The Stardrones - The Tremecula Dance.mp3";

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
// pm2
// scale
// filter photo
// git live
// keep playing

export default () => {
  const audioRef = useRef(null);
  const [playing, play] = useState(false);
  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);
  return <Body title="The Stardrones">
    <Div centered flex={1}>
      <HomeLink />
        <Div flex={1} style={{ padding: 16 }}>
        </Div>
      <Div centered>
        <Div centered style={{ padding: 16 }}>
          <img
            title="The Tremecula Dance"
            src={image}
            width={size}
            height={size}
          />
        </Div>
        <Div centered style={{ padding: 16 }}>
          <Link>The Stardrones</Link>
        </Div>
      </Div>
        <Div centered flex={1} style={{ padding: 16 }}>
          <Link onClick={() => play(!playing)} style={{ fontFamily: "impact", cursor: "pointer" }}>{playing ? "II" : <>&#9658;</>}</Link>
        </Div>
    </Div>
    <audio loop ref={audioRef} src={soundtrack} />
  </Body>
};
