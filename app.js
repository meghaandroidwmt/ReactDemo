import React from "react";
import ReactDOM from "react-dom";
import Game from "./src/demo1"


class App extends React.Component {

    render(){
        return   <Game />;
    }
}

ReactDOM.render(<App/>,
    document.getElementById("app"));



/*function setTime() {

const element = (
    /!*   <h1>
           Hello, {formatName(user)}!

       </h1>*!/
    <h2>It is {new Date().toLocaleTimeString()}.</h2>

);

    ReactDOM.render(element,
        document.getElementById("app"));
}

setInterval(setTime, 1000);*/


