import React from "react";
import "../components/styles.css";
import { useState } from "react";
import logo from "../assets/Logo.png";

const Main = () => {
  const [mob, setMob] = useState(false);
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className="Logoimg" />
        <ul className={mob ? "links-mob" : "links"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">API'S</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
        <button className="mobile-btn" onClick={() => setMob(!mob)}>
          {mob ? <h3>X</h3> : <h3>=</h3>}
        </button>
      </div>
    </div>
  );
};

export default Main;
