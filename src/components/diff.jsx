import React from "react";
import "../components/styles.css";
import Card from "../components/card";
import emailjs from '@emailjs/browser';
import {  useState } from 'react'

const Diff = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className="fea4">
      <div className="head3">Contact Form</div>
      <Card>
        <form>
          <div className="forms1">
            <input type="text" className="input1" placeholder="Enter Your Name" name="user_name" required/>
            <input type="text" className="input2" placeholder="Enter Your Email" name="user_email" required/>
          </div>
          {/* <div className="forms2">
            <input type="text" className="input3" placeholder="Enter Your Contact Number" required/>
          </div> */}
          <div className="forms3">
          <textarea type="text" className="input4" placeholder="Enter Your Feedback" name="message"/> 
          </div>
          <div className="button">
          <button type='submit' className="btn" value="Send" disabled={isSubmitting} >Submit</button>
          {stateMessage && <p>{stateMessage}</p>}
        </div>
        </form>
      </Card>
    </div>
  );
};

export default Diff;
