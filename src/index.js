import React from "react";
import ReactDOM from "react-dom";

const name = "Will";
const lastName = "Evans";
const luckyNumber = 11;

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lastName}!</h1>
    <h2>
      Hello {name} {lastName}!
    </h2>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
