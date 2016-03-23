import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return React.createElement("h1", null, "Hello, world!");
    }
}

let container = document.getElementById("container");
let component = ReactDOM.render(React.createElement(HelloWorld), container);
