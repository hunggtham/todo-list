import React from "react";
import Logo from "../assets/react.svg";
const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
    </header>
  );
};

export default Header;
