import React from "react";
import classes from "./Logo.module.css";

import logoImg from "../../../assets/logo.png";

const Logo = ({ className }) => {
  return (
    <div className={`${classes.logo} ${className}`}>
      <img src={logoImg} alt='logo' />
    </div>
  );
};

export default Logo;
