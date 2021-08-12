import { useState } from "react";

function Task2() {
  const [count,setCount] = useState([])
  
  function addCount(){
    count.push(0)
    setCount([...count])

  }

  function plus(idx){
   count[idx] += 1;

   setCount([...count])
  }
  
  function minus(idx){
   count[idx] -= 1;

   setCount([...count])
  }

  return(
    //CoUNTERLAR YASASH 2.1.2
    <div className='mt-4'>
      <h3>Counters</h3>
      <div>
        {
          count.map((item,index)=>{
            return  <div className='mb-3'>
                        <p className='mb-0 d-inline-block'>counter= {item}</p>            
                        <button className='btn btn-danger' onClick={()=>plus(index)}>+</button>
                        <button className='btn btn-danger' onClick={()=>minus(index)}>-</button>    
                    </div>} 
        )}
         <button className='btn btn-success' onClick={addCount}>+Add Counter</button>
     </div>    
    </div>
  )
}

export default Task2;