import React from "react";

export default ({ border, centered, children, flex, row, style, ...props }) => (
  <div
    style={{
      //alignItems: centered && "center",
      border: border && "solid 1px",
      borderRadius: 4,
      display: "flex",
      flex,
      flexDirection: row ? "row" : "column",
      justifyContent: centered && "center",
      margin: 4,
      padding: 4,
      textAlign: centered && "center",
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);
