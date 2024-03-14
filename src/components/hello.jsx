import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{props.greeting}</h2>
    </div>
);
};

export default Hello;