//import { useState } from "react";
//import Task215 from "./Task215";
//import Task211 from "./Task211";
//import Task212 from "./Task212";
import AppToDo from "./ToDoList/App";
//import AddNumber from "./UseStateuseEffect";

//import ChildComponent from "./ChildComponent..js";
//import LifeCycleMethods from "./LifeCycleMethod.js";

function App(){
  return(
    <div>
      {/*<Task211 />*/}
      <br/>
      <br/>
      <br/>
      <hr />
      {/*<Task212 />*/}
      <br/>
      <br/>
      <br/>
      <hr />
      <AppToDo />
      <br/>
      <br/>
      <br/>
      <hr />
      {/*<AddNumber />*/}
      <br/>
      <br/>
      <br/>
      <hr />
      {/*<Task215 />*/}
      <br/>
      <br/>
      <br/>
      <hr />
    </div>

  )
}
export default App;

//function App(props){

//  const [modalVisible, setModalVisible] = useState(false)

//  return(
//    <div>
    
//      <LifeCycleMethods />

//      <h1>Parent Component</h1>

//      <button onClick={()=>setModalVisible(true)}> Show modal </button>

//      <hr/>

//      {
//        modalVisible ? 
//        <ChildComponent setVisible={setModalVisible} /> : '' 
//        // modalVisible true bo'lsa chiqar aks holda chiqarma
//      }

//      <AppTest setTestApp={'salom'} />

//    </div>
//  )
//}

//export default App;

////PROPS
//const App = (props) => {
//  return (
//    <div>
//      {console.log(props)}
//      <h1 >Hello World {props.name}</h1>
//    </div>
//  )
//}
//export default App;


// functional componentlarda arreylarni map qilish.
//const arr = [
//  {
//    firstName: 'Alisher',
//    lastName: 'Raximov'
//  },
//  {
//    firstName: 'Bahodir',
//    lastName: 'Karimov'
//  },
//  {
//    firstName: 'Valijon',
//    lastName: 'Shamsiyev'
//  }
//]

//function App(props) {
//  return (
//    <div>
//      {console.log(props)}
//      <h1 >Hello World {props.name}</h1>

//      {
//        arr.map((item, index) => <p key={index}>{item.firstName + ' ' + item.lastName}</p>)
//      }
//    </div>
//  )
//}
//export default App;



// function event
//function App(props) {
//  function btnClicked() {
//    console.log(props.name)
//  }
//  return (
//    <div>
//      <h1>Hello {props.name}</h1>

//      <button onClick={btnClicked}>Check</button>
//    </div>
//  )
//}
//export default App;



// Parent and child Component
//import ChildComponent from "./ChildComponent";
//function App(props) {

//  function drawArray() {
//    return arr.map((item, index) => <p key={index}>It is {item}</p>)
//  }

//  let arr = [1, 2, 3, 4, 5]

//  return (
//    <div>
//      <h1>Hello {props.name}</h1>
//      <hr />
//      {drawArray()}
//      <hr />
//      <ChildComponent />
//    </div>
//  )
//}
//export default App;



// {useState}
//import {useState} from 'react';


//function App(props){
//  //state = {
//  //  a:0
//  //}
//  const arr = useState(0);
//  const a = arr[0];
//  const setArrState = arr[1];

//  function b(){
//    setArrState(100)
//  }

//  return(
//    <div>

//      <h1>{a}</h1>

//      <button onClick={b}>Counter</button>

//    </div>
//  )
//}
//export default App;


//import {useState} from 'react';

//function App(props){
//  const [count, setCount] = useState(0);

//  return(
//    <div>

//      <h1>{count}</h1>

//      <button onClick={()=>setCount(count+1)}>+</button>

//    </div>
//  )
//}
//export default App;


// useState count
//import {useState} from 'react';
//function App(props){
//  const [count, setCount]=useState(0);


//  return(
//    <div>
//      <h1>{count}</h1>
//      <button onClick={()=>setCount(prev=>prev+1)}>+</button>
//      <button onClick={()=>setCount(prev=>prev-1)}>-</button>
//      <button onClick={()=>setCount(0)}>Reset</button>
//    </div>
//  )
//}
//export default App;


//import {useState} from 'react';
//function App(props){
//  const [far, setFar] = useState(0)
//  const [step, setStep] = useState(1)

//  return(
//    <div>
//      <h1>Yurdi: {far}</h1>
//      <button onClick={()=>setFar(prev=>prev+step)}>Yurmoq</button>
//      <hr/>
//      <h1> Qadam kattaligi: {step}</h1>
//      <button onClick={()=>setStep(prev=>prev+1)}></button>
//    </div>
//  )
//}
//export default App;



//import {useState} from 'react';

//function App(props){
//  const [user, setUser] = useState({firstName:'aaa', lastName:'bbb'})

//  function changeUser(){
//    user.firstName = 'Alisher'
//    let a = {...user}
//    setUser(a)
//    }

//  return(
//    <div>
//      <h1> {user.firstName+' '+user.lastName}</h1>

//      <button onClick={changeUser}>Change user</button>
//    </div>
//  )
//}



//Murakkab state

//function App(props){
//  const [user, setUser] = useState({
//    name: 'AAA',
//    address:{
//      country:{
//        city:{
//          street:{
//            name:'BBB'
//          }
//        }
//      }
//    }
//  });

//  function changeUser(){
//    user.address.country.city.street.name = 'CCC'
//    let a = {...user}
//    setUser(a)
//    }

//  return(
//    <div>
//      <button onClick={changeUser}>Change user</button>
     
//      {JSON.stringify(user, null, 2)}
//    </div>
//  )
//}
//export default App;