import React from 'react';

export default ({ centered, children, row, style }) => (
  console.log(centered) || 
  <div
    style={{
      alignItems: centered && "center",
      display: "flex",
      flexDirection: row ? "row" : "column",
      justifyContent: centered && "center",
      margin: 4,
      padding: 4,
      textAlign: centered && "center",
      ...style
    }}
  >
    {children}
  </div>
);