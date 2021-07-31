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
import ChildComponent from "./ChildComponent";
function App(props) {

  function drawArray() {
    return arr.map((item, index) => <p key={index}>It is {item}</p>)
  }

  let arr = [1, 2, 3, 4, 5]

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <hr />
      {drawArray()}
      <hr />

      <ChildComponent />
    </div>
  )
}
export default App;