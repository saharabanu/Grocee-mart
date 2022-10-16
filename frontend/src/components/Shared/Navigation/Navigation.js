import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


let navStyle = {
  textDecoration: "underline",
  color: "#9932cc",
  border: "0px solid black",
};

const Navigation = () => {
  // const {user,logOut} = useAuth();

 
    return (
       <>
       <Navbar bg="" expand="lg" sticky="top" className='text-white shadow-sm h-25 header-full' style={{backgroundColor:"#3cb815"}}>
    <Container> 
    <Navbar.Brand href="#" className="text-white"><NavDropdown title="All Categories" id="" >
              <NavDropdown.Item className="nav-dropdown" href="/">Accessories</NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown" href="/">
              Accessories & More
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown" href="/">
              Camera & Video
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown" href="/">
              Butter & Eggs
              </NavDropdown.Item>
            </NavDropdown></Navbar.Brand>
    <Navbar.Toggle  />
    <Navbar.Collapse >
    {/* aria-controls="navbarScroll"
    id="navbarScroll" */}
      <Nav
        className="mx-auto my-2 my-lg-0  text-white"
        // style={{ maxHeight: '50px' }}
        // navbarScroll
      >
          <Nav.Link as={Link} to="/home"  className="header-items">Home</Nav.Link>
          <Nav.Link as={Link} to="/shop"  className="header-items"> Shop</Nav.Link>
          <Nav.Link as={HashLink} to="/home#blog"  className="header-items">Blog</Nav.Link>
          <Nav.Link as={Link} to="/contact"  className="header-items">Contact</Nav.Link>
          <Nav.Link as={Link} to="/"  className="header-items">Pages</Nav.Link>
          {/* <Nav.Link as={Link} to="/home"  className="header-items">Stores</Nav.Link> */}
          {/* {user?.email && <Nav.Link as={Link} to="/dashboard"  className="header-items">Dashboard</Nav.Link>} */}
          
          
         
        
      </Nav>
            <div className="d-flex header last-part">
            <NavDropdown className='px-3' title="Language" id="" >
              <NavDropdown.Item className="nav-dropdown" href="#action3">Bengali</NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown" href="#action4">
              English
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown" href="#action5">
              Spanish
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link as={Link} to="/login"  className="header-items">Login</Nav.Link>
            {/* {user?.email ? <button className='logout-btn' onClick={logOut}>Logout</button> : <Nav.Link as={Link} to="/adminLogin"  className="header-items">Admin Login</Nav.Link>} */}
            
            
            {/* <h4>{ user?.name}</h4> */}
            
            
            </div>
    </Navbar.Collapse>
  </Container>
      </Navbar>
         
      
                                
         </>
        
    );
}

export default Navigation