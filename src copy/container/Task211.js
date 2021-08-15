import React, { useState, useEffect } from 'react';

function Task211(){

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)

  function toggle(){
    setIsActive(!isActive);
  }

  function reset(){
    setSeconds(0)
  }
 
  useEffect(()=>{
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds+1);
      },1000);
    }else if(!isActive && seconds !== 1){
      clearInterval(interval);
    }
    return()=>clearInterval(interval);
  }, [isActive, seconds]);


  return (
  <div className="app">
    <div className="time">
      {seconds}s
    </div>
    <div className="row">
      <button className={`button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  </div>
  )
}

export default Task211;