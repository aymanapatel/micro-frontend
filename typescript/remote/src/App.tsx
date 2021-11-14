import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import MyUserMFE from "./MyUserMFE";

import type { UserMFE } from "mfe-s"

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>
      <MyUserMFE user="Ayman"/>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
