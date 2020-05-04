import React from "react";

export default ({ children, color, fontFamily }) => (
  <span style={{ color, fontFamily: fontFamily || "Amsterdam", fontSize: 16 }}>
    {children}
  </span>
);
