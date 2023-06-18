// var React = require("react");
// import React from "react";
// var ReactDom = require("react-dom");
// import ReactDom from "react-dom";
// ReactDom.render(<h1>Hello Ayan</h1>,document.getElementById("root"))



//challenge 2


// import React from "react";
// import ReactDOM from "react-dom";
// const fname="Syed Tarique";
// const lname="Abedin";
// ReactDOM.render(<>
//     <h1>Thapa Technical Netflix Pick</h1>
//     <p>List of 5 Best Series</p>
//     <ol type="1">
//         <li>Dark</li>
//         <li>Extra Curricular</li>
//         <li>My Holo Love</li>
//         <li>My first-2 Love</li>
//         <li>Mr Robot</li>
//         <h2>{`My Name is ${fname} ${lname}`}</h2>
//         <h3>This is string literal {2+5}</h3>
//         <h3>This is string literal 2+5</h3>
//     </ol>

// </>,document.getElementById("root"));

//challenge 2

// import React from "react";
// import  ReactDOM  from "react-dom";
// const name="Syed tarique abedin";
// const currentdate=new Date().toLocaleDateString();
// const currenttime=new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//         <h1>Hello,My name is {name}</h1>
//         <p>The current Date is:{currentdate} </p>
//         <p>The current Date is:{currenttime} </p>
//     </>,
//     document.getElementById("root")
// );


//challenge 3

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css"

// const curdate= new Date(27,5,5,15);
// const curhour=curdate.getHours();
// var getting= "";
// const cssstyle={};
// if (curhour >= 1 && curhour<12) {
//     getting="Good Morning";
//     cssstyle.color="black";
// }
//  else {
//     getting="Good Aftrnoon";
//     cssstyle.color="green"
// }



//challenge 5

// import React from "react";
// import  ReactDOM  from "react-dom";
// import sum,{sub,div,mul} from "./App";
// import * as cal from "./App";
// import App from "./App";

// ReactDOM.render(
//     <>
// <App/>
//     </>,
//     document.getElementById("root")
// );
import React from "react";
import  ReactDOM  from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
   
 <>
<App />
</>,
    
     document.getElementById("root")
);




