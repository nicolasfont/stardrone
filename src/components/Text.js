import React from "react";

export default ({ children, small }) =>
  <span style={{ fontFamily: "Amsterdam", fontSize: small ? 12 : 16 }}>{children}</span>;
