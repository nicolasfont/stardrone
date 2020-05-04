import React from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

// responsive

export default () => (
  <Div alignItems="center" justifyContent="center" flex={1}>
    <HomeLink />
    <iframe
      src="https://www.youtube.com/embed?listType=playlist&modestbranding=1&list=PLVnJFr0ragjc5j_JSMp2ilv6uiPf7AJBU&autoplay=0"
      title="music"
      frameBorder={0}
      width="560"
      height="315"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Div>
);
