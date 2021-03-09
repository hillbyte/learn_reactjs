import React, { Fragment } from "react";
const HeaderComponent = () => {
  return (
    <Fragment>
      <nav>
        <ul className="header">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default HeaderComponent;
