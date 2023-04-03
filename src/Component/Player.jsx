import React from 'react'
import './Player.css'
import { useState, useEffect, useRef } from "react";
import on from "../Component/images/on.png"
import off from "../Component/images/off.png"
const Player = () => {
    const [onplay, setOnPlay] = useState(false);
    const clickRef = useRef();
    const handlebutton = () => {
      setOnPlay(!onplay);
    };

    useEffect(() => {
      if (!onplay) {
        console.log("play");
      } else {
        console.log("pause");
      }
    }, [onplay]); 
  return (
    <div>
      {onplay ? (
        <button onClick={handlebutton}> <img src={on} alt="On" /> </button>
      ) : (
        <button onClick={handlebutton}> <img src={off} alt="Off" /> </button>
      )}
    </div>
  );
}

export default Player