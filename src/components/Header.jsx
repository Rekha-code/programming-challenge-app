import React from "react";
import ReactLogo from "./React_logo1.png";

const Header = () => {
  return (
    <div>
      <header className="app-header">
        <img src={ReactLogo} alt="Reactlogo" />
        <h1>The React Quiz</h1>
      </header>
    </div>
  );
};

export default Header;
