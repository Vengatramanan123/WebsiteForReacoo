import React from "react";
import "../components/styles.css";
import Reactlogo from '../assets/Reactlogo.png';
import Nodelogo from '../assets/nodelogo.png';

function domain() {
  return (
    <div className="fea1">
      <div>
        <h1 className="head2">Knowledge About "REACOO"</h1>
      </div>
      <div className="jsx">
        <img src={Reactlogo} alt="" className="jsxlogo"/>
      </div>
      <div className="headcontent1">
        <h3 className="para12">JavaScript XML(JSX)</h3>
        <p>
        JSX stands for “JavaScript XML,” and it is a syntax extension  <br />
        to JavaScript based in ES6,
         the newest “version” of JavaScript. <br /> JSX allows you to write HTML in React by converting HTML <br />
         into React components, helping you to more easily create  <br />user interfaces for your web applications.
        </p>
      </div>
      <div className="node">
        <img src={Nodelogo} alt="" className="nodelogo"/>
      </div>
      <div className="headcontent2">
        <h3 className="para123">Node JS</h3>
        <p>
        Node JS is used for server-side  <br />programming, and primarily deployed for  <br />non-blocking,
         event-driven servers,<br /> such as traditional web sites and <br />back-end API services, 
         but was <br /> originally designed with real-time,<br /> push-based architectures in mind. 
          <br />Every browser has its own version of a <br /> JS engine, and node.
        </p>
      </div>
    </div>
  );
}

export default domain;
