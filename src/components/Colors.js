import React from "react";
import Div from "./Div";
import { Motion, spring } from 'react-motion';

export default () =>
  <Div row>
      <Motion defaultStyle={{ height: 0, width: 0 }} style={{ height: spring(30), width: spring(30) }}>
        {({ height, width }) =>
          <>
            <Div style={{ backgroundColor: "red", borderRadius: "50%", height, width }}></Div>
            <Div style={{ backgroundColor: "purple", borderRadius: "50%", height, width  }}></Div>
            <Div style={{ backgroundColor: "blue", borderRadius: "50%", height, width  }}></Div>
            <Div style={{ backgroundColor: "lightblue", borderRadius: "50%", height, width  }}></Div>
            <Div style={{ backgroundColor: "green", borderRadius: "50%", height, width  }}></Div>
            <Div style={{ backgroundColor: "yellow", borderRadius: "50%", height, width  }}></Div>
          </>
        }
      </Motion>
  </Div>;
