import {useState} from 'react';

import Row from "./Row";
import TableHead from "./TableHead";

function Table(params) {

  const[user, setUser] = useState();

  function AddUser() {

    return (
      <div>
        {user}
      </div>
    )
  }

  return(
    <div>

    <button onClick={()=>AddUser} className='btn'>Add</button>

    <div>
      <table className='table'>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <Row />
        </tbody>
        
      </table>
    </div>
    </div>
  )
}

export default Table;
