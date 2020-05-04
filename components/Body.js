import React, { useEffect } from "react";

export default ({ children, margin, title }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    document.body.style.margin = margin;
    return () => {
      document.body.style.margin = null;
    };
  }, [margin, title]);
  return children;
};
