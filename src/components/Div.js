import React from 'react';

export default ({ centered, children, row, style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: row ? "row" : "column",
      margin: 4,
      padding: 4,
      ...style
    }}
  >
    {children}
  </div>
);