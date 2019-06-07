import React, { useEffect } from "react";

export default ({ children, margin, title }) => {
  useEffect(() => {
    document.title = title || "Stardrone";
    document.body.style.margin = margin;
    return () => {
      document.body.style.margin = null;
      document.title = "Stardrone";
    };
  }, [margin, title]);
  return children;
};
