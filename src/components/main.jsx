import React from "react";
import "../components/styles.css";
import headimg from "../assets/Avery.png";

const main = () => {
  return (
    <div className="bgtot">
      <div className="shadow">
        <img src={headimg} alt="" className="headi" />
      </div>
      <div className="headcontent">
        <h3 className="para1">Introduction</h3>
        <p>
          Reacoo is a web application with the Knowledge of "MERN STACK" that is used to  experiencing the rest
          API's . The purpose of this project is to create an interactive
          platform where developers can test and learn about RESTful APIs by
          making HTTP requests, viewing responses,and interacting with data in
          real-time.
        </p>
      </div>
    </div>
  );
};

export default main;
