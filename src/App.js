import React from "react";
import Header from "./component/header";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "font-awesome/css/font-awesome.css";
import Somestuff from "./component/somestuff";
import Profile from "./component/profile";

// import "./css/override.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Somestuff />
    </React.Fragment>
  );
}

export default App;
