/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
  <h1>Welcome to Zealous Tech Corp</h1>,
  document.getElementById('root')
);

// meaning of render call
/*
ReactDOM.render(
  WHAT TO SHOW,
  WHERE TO SHOW, CALL BACK
);*/

// purpose of React is to associate with JSX in order to display WHAT TO SHOW because its not typical HTML its JSX(java script xml/ext)

/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  */


//manually write h1 without jsx, babel compiler
var h2=document.createElement("h2");
h2.innerHTML="Razak Mohamed";
document.getElementById('root').appendChild(h2)

// manual typical js way
/* var React=require('react')
var ReactDOM=require('react-dom')
ReactDOM.render(<h2>Zealous Welcomes you all</h2>,document.getElementById('root')); */