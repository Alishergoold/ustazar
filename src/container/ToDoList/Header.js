import Row from "./Row";
import TableHead from "./TableHead";

function Table(params) {
  return(
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
  )
}

export default Table;
