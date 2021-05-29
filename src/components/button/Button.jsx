import React from "react";
import { CustomButtonContainer } from "./Button.style";
import "./Button.style.scss";
const Button = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default Button;
