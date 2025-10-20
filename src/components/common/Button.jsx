import React from "react";

const Button = ({ children, href }) => {
  return (
    <a className="text-white px-2 py-1 bg-primary radius" href={href}>
      {children}
    </a>
  );
};

export default Button;
