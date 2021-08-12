
import Table from "./Header";


function AppToDo() {

  function AddUser(params) {
    return (
      <div>
        User
      </div>
    )
  }

  return(
    <div>

      <button onClick={AddUser} className='btn'>Add</button>

      <Table />

    </div>
  )
}

export default AppToDo;