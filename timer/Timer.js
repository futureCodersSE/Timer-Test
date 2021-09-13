import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
    // create a state variable to hold a string representing the current time 
    const [curTimeString, setCurTimeString] = useState("--:--:--");

    // create a useEffect function to set the current time string once every second
    useEffect(() => {
        var interval = setInterval(() => setCurrentTime(), 1000);
        return () => clearInterval(interval);
    });

    // create a function to create a string to represent the current time in the format hh:mm:ss and set the state variable
    const setCurrentTime = () => {
        let curDate = new Date();
        let curHour = curDate.getHours();
        let curMins = curDate.getMinutes();
        let curSecs = curDate.getSeconds();
        if(curHour < 10){
            var curHourString = '0' + curHour.toString()
        }
        else{
            var curHourString = curHour.toString()
        }
        if(curMins < 10){
            var curMinString = '0' + curMins.toString()
        }
        else{
            var curMinString = curMins.toString()
        }
        if(curSecs < 10){
            var curSecString = '0' + curSecs.toString()
        }
        else{
            var curSecString = curSecs.toString()
        }
        setCurTimeString(curHourString + ':' + curMinString + ':' + curSecString);
    }

    // render timer
    return (
        <div>
            {/* show current time in the centre of the screen with a large font size suitable for all screen sizes */}
            <h1 className="timerStyle">Current Time</h1>
            <div data-testid="timer" className="timerStyle">{curTimeString}</div>
        </div>
    );
  }

export default Timer;
