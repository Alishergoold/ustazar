import {useEffect, useState} from 'react';


function ChildComponent(props) {

  const  [time, setTime] = useState(0)


  useEffect(()=>{

    const a = setInterval(()=>{
    setTime(prev=>prev+1)
      console.log('time worked');
    },1000)

    return()=>{
      console.log('Worked');
      clearInterval(a)
    }
    // Agar biz useEffect ni ichida arrow function yozsak bu kodlar compWilunMountda ishlaydi
  }, []);

  // Bitta functional componentlarda hohlagancha useEffect va useStatelarni ishlatishimiz mumkin


  return (
    <div className={'col-md-6 offset-3'}>
      <div className={"card"}>

        <div className="card-header">
          <h1>Modal</h1>
        </div>

        <div className="card-body">
          <h1>Modal body</h1>
          <h1>Time: {time}</h1>
        </div>

        <div className="card-footer">
          <button className={"btn btn-success"}>Save</button>
          <button className={"btn btn-danger"} onClick={()=>props.setVisible(false)}>Clear</button>
        </div>

      </div>
    </div>
  );
}

export default ChildComponent;
