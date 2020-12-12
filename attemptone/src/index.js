import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
  // typical react render
  ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
  <h1>Welcome to Zealous Tech Corp</h1>,
  document.getElementById('root')
); */

// meaning of render call
/*
ReactDOM.render(
  WHAT TO SHOW,
  WHERE TO SHOW, CALL BACK
);*/

//manually write h1 without jsx, babel compiler
/* var h2=document.createElement("h2");
h2.innerHTML="Razak Mohamed";
document.getElementById('root').appendChild(h2) */

// manual typical js way
/* var React=require('react')
var ReactDOM=require('react-dom')
ReactDOM.render(<h2>Zealous Welcomes you all</h2>,document.getElementById('root')); */

// Grouping multiple element of jsx by <div> or [] since render accespts on jsx
/* ReactDOM.render(
  // <div>
  //   <h1>Mutual Enhancement for Both u & us</h1>,
  //   <h4>Razak Mohamed S</h4>,
  // </div>
  [
    <h1>Mutual Enhancement for Both u & us</h1>,
    <h4>Razak Mohamed S</h4>,
  ] ,
  document.getElementById('root')
); */

//while using <div> to group it will create on more <div> tagin out root, to avoid that can use <React.Fragment> to group or simple <>
/* ReactDOM.render(
  <React.Fragment>
     <h1>Mutual Enhancement for Both u & us</h1>,
     <h4>Razak Mohamed S</h4>,
   </React.Fragment>,
  // <>
  //    <h1>Mutual Enhancement for Both u & us</h1>,
  //    <h4>Razak Mohamed S</h4>,
  //  </>,
  document.getElementById('root')
);  */

// Excercise 1: list
/* ReactDOM.render(
  <>
    <h2 style={{color: 'blue'}}>Razak's Favourite Cult Movies</h2>
    <ol type="1" style={{color:'maroon'}}>
      <li>Ratsasan</li><li>Soorarai Potru</li><li>Thani ovuvan</li>
      </ol>
  </>,
  document.getElementById('root')
);  */


// JSX expresion
/* const hai="Zealous Academy"
ReactDOM.render(
  <>
    <h2 style={{color: 'blue'}}>Razak's Companies</h2>
    <ol type="1">
<li>{hai}</li><li>Second company started after{2015+3}</li>
<li>Third company started after{2019+1}</li>
      </ol>
  </>,
  document.getElementById('root')
);  */

// JSX Template Literals: `${}`
/* const hai="Zealous Academy"
const year=2015
ReactDOM.render(
  <>
    <h2 style={{color: 'blue'}}>Razak's Companies</h2>
    <ol type="1">
<li>{hai}</li><li>{`Second company started after${year+3}`}</li>
<li>Third company started after{year+4}</li>
      </ol>
  </>,
  document.getElementById('root')
);  */


// Excercise 2:
/* ReactDOM.render(
  <>
    <h1>Razak Mohamed, Welcome to new day</h1>
    <p>{`The New Day is ${new Date().toLocaleDateString()}`}</p>
    <p>{`And the time now is ${new Date().toLocaleTimeString()}`}</p>
  </>,document.getElementById('root')
); */

// JSX Attributes
/* const hai="Zealous Academy";
ReactDOM.render(
  <>
    <h2 contentEditable="True" style={{color: 'blue'}}>Razak's Companies</h2>
    <ol type="1">
      <li>{hai}</li><li>{`Second company started after ${2015+3}`}</li>
      <li>Third company started after {2015+4}</li>
    </ol>
  </>,
  document.getElementById('root')
);  */

// Images
const hai="https://picsum.photos/250/300";
const bye="https://picsum.photos/300/300";
const say="https://picsum.photos/350/300";
const who="https://picsum.photos/450/300";
const link="http://www.google.co.in";
ReactDOM.render(
  <>
    <h2 contentEditable="True" style={{color: 'blue'}}>Razak's Companies</h2>
    <ol type="1">
      <li><img src="https://picsum.photos/200/300" alt="randomimg1"/></li>
      <li><img src={hai}/></li>
      <li><img src={bye}/></li>
      <li><img src={say}/></li>
      <li><a href={link} target="_blank"><img src={who}/></a></li>
    </ol>
  </>,
  document.getElementById('root')
); 



// purpose of React is to associate with JSX in order to display WHAT TO SHOW because its not typical HTML its JSX(java script xml/ext)

/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  */


