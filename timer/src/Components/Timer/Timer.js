import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
    // create a state variable to hold a string representing the current time, default value '--:--:--' 
    

    // create a useEffect function to set the current time string once every second


    // create a function to create a string to represent the current time in the format hh:mm:ss and set the state variable


    // render timer
    return (
        <div>
            {/* show current time in the centre of the screen with a large font size suitable for all screen sizes */}
            <div data-testid="timer" className="timerStyle"></div>
        </div>
    );
  }

export default Timer;
