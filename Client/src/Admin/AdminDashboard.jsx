import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function AdminDashboard() {
    const navigate = useNavigate();

  const Logout = ()=>{
    localStorage.getItem("email");
    navigate("/")
  }

  return (
     <>
     <div id="adminpage">
        <div id="admin1">
           <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}  to="dashbord">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="addproduct">AddToProduct</Nav.Link>
            <Nav.Link as={Link} to="display">ProductDisplay</Nav.Link>
            <Nav.Link as={Link} to="user">User Create</Nav.Link>
            <Nav.Link  as={Link} to="userdisplay">User Display </Nav.Link>
            <Nav.Link  as={Link} to="mr">MR Create </Nav.Link>
            <Nav.Link  as={Link} to="mrdisplay">MR Display </Nav.Link>
            <Nav.Link  as={Link} to="kyccustomer">Display Customer </Nav.Link>
            <Nav.Link  as={Link} to="attribute">Attributes</Nav.Link>
          </Nav>
        </Container>
       <Button variant="warning" onClick={Logout}>Logout</Button>
      </Navbar>
      </div>
      <div id="admin2">
        <Outlet/>
      </div>
      </div>


     
     </>
  )
}

export default AdminDashboard