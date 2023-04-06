import React from 'react'
import { useState } from 'react';
import '../styles/App.css';

// This mini project is to excercise your react state skills.
// Create an h1 with id="marco-polo" which initially displays "Marco"
// and a button with id="marco-polo-toggler" which initially displays "Polo"
// inside the button.

// On clicking the button the h1 should display "Polo" and the button should
// display "Marco" inside it, and so on like that".

const App = () => {

  const [alternate , setAlternate] = useState(false);

  const handleClick = () =>{

    if(alternate == false){

      setAlternate(true)

    }
    else{

      setAlternate(false);

    }

  }

  
  return (
    <div id="main">
        <h1 id='marco-polo'>{alternate ? "Polo" : "Marco"}</h1>
        <button id='marco-polo-toggler'  onClick={handleClick}>{alternate ? "Marco" : "Polo"}</button>
    </div>
  )
}



export default App;
