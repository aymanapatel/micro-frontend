import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Counter from "remote/Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: HOST</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
