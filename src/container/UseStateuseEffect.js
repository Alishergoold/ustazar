import {useState} from 'react';

function AddNumber() {

  const [text, setText] = useState();

  //const [state, setState] = useState({
  //  text: 'Number',
  //  date: Date.now()
  //});

  //function ChangState() {
  //  return(
  //    <div>div</div>
  //  )
  //}

  function ChangeText(){
    return setText(0)
  }

  function DeleteText(){
    return setText((prev)=>prev+1)
  }

  return(
    <div className='card col-md-4'>
      <h1>{text}</h1>

      <button onClick={ChangeText}
       className='btn btn-primary'>Qo'shish</button>
       
      <button onClick={DeleteText}
       className='mt-3 btn btn-primary'>O'chirish</button>

      {/*<button onClick={()=>setState({text:"NEw text"}) } className='btn btn-danger'>Stateni O'zgartir</button>*/}
    </div>
  )
  
}

export default AddNumber;