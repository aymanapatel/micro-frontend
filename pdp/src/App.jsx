import React from "react";
import ReactDOM from "react-dom";

/* Remote Components from `home` */
import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">PDP Hero</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
