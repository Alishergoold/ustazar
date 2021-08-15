import {useState} from 'react';

function Task215() {
  
  const [user, setUser] = useState({
    firstName: 'AA',
    lastName: 'BB',
    address: [
        {
            name: 'AA',
            count: 0
        },
        {
            name: 'AA',
            count: 0
        },
        {
            name: 'AA',
            count: 0
        }
    ]
})


const addCount = (idx)=>{
  user.address[idx].count += 1
  setUser({...user})
}

const removeCount = (idx) => {
  user.address[idx].count -= 1
  setUser({...user})
}
  
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {
          user.address.map((add,index)=>{
            return <tr>
                <td>{index+1}</td>
                <td>{add.name}</td>
                <td>
                  <button onClick={()=>addCount(index)}>+</button>
                  {add.count}
                  <button onClick={()=>removeCount(index)}>-</button>
                </td>
              </tr>
            })
        }
      </tbody>
    </table>

  )
}

export default Task215;