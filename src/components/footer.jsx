import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

const footer = () => {
  return (
    <div className="overallbg">
      <hr />
      <div className="foot">
        <IoMdCall /> &nbsp;<span>9876543210</span>
        <br />
        <IoLocation /> &nbsp;<span>Los Angles,United States - 90001</span>
      </div>
      <div className="overalllink">
        <div className="linktit">Follow Us :</div>
        <br />
        <div className="media">
          <FaGithubSquare /> &nbsp;<a href="https://github.com/Vengatramanan123/Reacco.git"><span>Git Hub</span></a>
        </div>
      </div>
      <div className="copy">
        <div>&copy; Since 2024 Reacoo. All rights reserved</div>
      </div>
    </div>
  );
};

export default footer;
