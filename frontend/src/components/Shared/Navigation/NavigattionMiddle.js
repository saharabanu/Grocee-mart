import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imglogo from '../../../images/nav-log.png'

const NavigattionMiddle = () => {
  return (
    <>

        <Navbar bg="white" expand="lg">
      <Container >
        <Navbar.Brand href="/"> <img src={imglogo} alt="imglogo" />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <Nav
            className="mx-auto my-2 my-lg-0 py-2 px-3"
            style={{ maxHeight: '100px', borderRadius:"50px",backgroundColor:"#d8cdcd1f" }}
            navbarScroll
          >
           
            <NavDropdown title="Select Categories" id="" className='text-dark'>
              <NavDropdown.Item href="#action3">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Accessories & More
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Camera & Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Butter & Eggs
              </NavDropdown.Item>
            </NavDropdown>
            <form className="d-flex">
            <input
              type="search"
              placeholder="Search Product"
              className="border-0 p-2"
             style={{outline:"none"}}
            />
            <button className="border-0 p-2 src-btn" >Search</button>
          </form>
           
           
            
          </Nav>
          
                  <div className=''>
                    
                    <Link as={Link} to="/" ><i className="fa-solid fa-user nav-icon"></i></Link>
                    <Link as={Link} to="/cart"><i className="fa-solid fa-cart-shopping nav-icon"></i></Link> 
                    <Link as={Link} to="/"><i className="fa-solid fa-heart nav-icon"></i></Link> 
                    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigattionMiddle