import React from "react";

export default ({ children, fontFamily }) => (
  <span style={{ fontFamily: fontFamily || "Amsterdam", fontSize: 16 }}>{children}</span>
);
