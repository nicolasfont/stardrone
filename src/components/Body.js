import React, { useEffect } from "react";

export default ({ children, margin }) => {
  useEffect(() => {
    document.title = "Stardrone";
    document.body.style.margin = margin;
    return () => {
      document.body.style.margin = null;
    };
  }, [margin]);
  return children;
};
