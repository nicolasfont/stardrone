import React, { useEffect, useRef, useState } from "react";

const context = new AudioContext();
const source = context.createBufferSource();
source.connect(context.destination);

const request = new XMLHttpRequest();

// request.open("GET", soundtrack, true);

request.responseType = "arraybuffer";

request.onload = () => {
  context.decodeAudioData(
    request.response,
    response => {
      source.buffer = response;
      source.start(0);
      source.loop = true;
    },
    e => console.error(e)
  );
};

// request.send();

export default ({ children }) => {
  const [playing, play] = useState(false);
  useEffect(() => {
    if (playing) {
      //myAudio.play();
    } else {
      //myAudio.pause();
    }
  }, [playing]);
  return children;
};
