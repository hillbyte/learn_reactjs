import React, { Fragment } from "react";

import HeaderComponent from "./Component/HeaderComponent";
import EmployeeComponent from "./Component/EmployeeComponent";
let App = () => {
  return (
    <Fragment>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <EmployeeComponent />
      </main>
    </Fragment>
  );
};
export default App;
