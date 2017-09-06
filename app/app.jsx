const React = require('react');
const ReactDOM = require('react-dom');
//React Components

let objOne = {
  name: "James",
  location: "Kentucky"
}

let objTwo = {
  age: 22,
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate App</h1>,
  document.getElementById('app')
);
