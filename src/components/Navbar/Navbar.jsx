import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Navnav() {
  return (
    <>
      <Navbar className='nav-nav' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img width="30px" src='https://cdn-icons-png.flaticon.com/128/0/85.png' alt='logo' />
          </Navbar.Brand>
          <Nav className="me-auto">
          
          <Link to="/aboutme" style={{ width:"100px", color: "white", marginTop: "10px", textDecoration: "none", marginLeft: "20px"}} >About Me
            </Link>
            <Link to="/works" style={{width:"80px", color: "white", marginTop: "10px", textDecoration: "none", marginLeft: "20px"}} >Works
            
            </Link>
            <Link to="/contacts" style={{width:"80px", color: "white", marginTop: "10px", textDecoration: "none", marginLeft: "20px"}} >Contacts
            
            </Link>
            
            <Navbar.Brand href="searching">
            <img style={{marginLeft: "800px"}} width="20px" src='https://cdn-icons-png.flaticon.com/128/149/149852.png' alt='logo' />
          </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navnav;