import React from "react";

export default ({
  alignItems,
  border,
  centered,
  children,
  flex,
  justifyContent,
  row,
  style,
  textAlign,
  ...props
}) => (
  <div
    style={{
      alignItems,
      border: border && "solid 1px",
      borderRadius: 4,
      display: "flex",
      flex,
      flexDirection: row ? "row" : "column",
      justifyContent: justifyContent || (centered && "center"),
      margin: 4,
      padding: 4,
      textAlign: textAlign || (centered && "center"),
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);
