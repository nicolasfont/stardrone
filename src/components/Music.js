import React from "react";
import HomeLink from "./HomeLink";
import Div from "./Div";

// responsive

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <iframe
      src="https://www.youtube.com/embed?listType=playlist&modestbranding=1&list=PLVnJFr0ragjfug9bOIVlZHzjEdceWcgws&autoplay=0"
      title="music"
      frameBorder={0}
      width="560"
      height="315"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Div>
);
