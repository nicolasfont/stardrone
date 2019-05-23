import React from 'react';

export default ({ children, row }) => (
  <div
    style={{
      display: "flex",
      flexDirection: row ? "row" : "column",
      margin: 4,
      padding: 4
    }}
  >
    {children}
  </div>
);