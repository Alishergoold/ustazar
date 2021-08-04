//import {useState, useEffect} from 'react';


//function LifeCycleMethods(){
//  const [counter, setCounter] = useState(0);
//  const [active, setActive] = useState(false)


//  useEffect( ()=>{
//    // componentDidUpdate va componentDidMount o'rnini bosa oladi
//    // render bo'ldimi useEffect ishlaydi
//    document.title = 'Counter is counter' + counter;
//  }, [counter]); //faqat counter ishlaganda ishlaydi. bu holatda componentdidUpdate ni o'rnini bosdi

//  useEffect(()=>{
//    // Malumotlarni backenddan olib kelish uchun ishlatiladi
//    console.log('componentDidMount worked');
//  },[])

//  return(
//    <div>
//      <h1>{counter}</h1>
//      <button onClick={()=>setCounter(prev=>prev+1)}>Change</button>

//      {/* Modal oyna */}
//      <h1>{active ? 'active is true':''}</h1>
//      <button onClick={()=>setActive(prev=>!prev)}>change active</button>
    
    
//    </div>
//  )
//}


//function LifeCycleMethods(){
//  const[users,setUsers]  = useState([])

//  useEffect(() => {
//    setUsers([
//      1,2,3,4
//    ])
//  }, [])


//  return(
//    <div>
//      {users.map((item,index)=><p key={index}>{item}</p>)}
//    </div>
//  )
//}

// componentWillUnMount proyekt tugash jarayaoni
function LifeCycleMethods(){

  return(
    <div>
      

    </div>
  )
}

export default LifeCycleMethods;