import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import MyUserMFE from "remote/MyUserMFE";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <MyUserMFE user="Ayman host"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
