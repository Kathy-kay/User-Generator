import {useState, useEffect} from 'react'
import UserDisplay from './UserDisplay'
import ReactPaginate from 'react-paginate'


const User = () =>{
  
  const [users, setUsers] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user)=>(
     <UserDisplay  key={user.email}
             {...user}/>
  ))
  


  

  useEffect(() =>{
    const fetchUsers = async () =>{
      const response = await fetch
        ("https://randomuser.me/api/?results=50&seed=abc");
      const data = await response.json();
      setUsers(data.results);
    }
    fetchUsers();
  }, [])

  const pageCount = Math.ceil(users.length / usersPerPage)
  const pageChange = ({selected}) =>{
    setPageNumber(selected);
  }
  
  return(
    <div className="container">
      <h1>List Of Users</h1>
      <div className="user-display">
        {displayUsers}
    
        <ReactPaginate 
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          NextLinkClassName={'NextBtn'}
          activeClassName={'Active'}
          renderOnZeroPageCount={null}  
          
          />
        
      </div>
    </div>
  )
}
export default User;

