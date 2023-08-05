import { Navbar ,Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Headers() {
  let navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user-info'))
  function logout(){
    localStorage.clear()
    navigate('/sign');
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="nav_wrap">
          <Navbar>ShoppingKart</Navbar>
        </div>
        <Nav className="mr-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/login">Login </Link>
              <Link to="/sign">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to='/'>Products List</Link>
              <Link to="/add">Add Products</Link>
              <Link to="/update">Update Products</Link>
              <Link to='/search'>Search Product</Link>
            </>
          )}
        </Nav>

        {
        localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null
        }
      </Navbar>
    </div>
  );
}
