import React from "react";
import { SayHello } from "@yishay11/p2";
import { SayHi } from "@yishay11/p1";
import "./App.css";

const App = () => {
  console.log(SayHi());
  console.log(SayHello());
  return <div className="main-div">Hello There in the</div>;
};

export default App;
