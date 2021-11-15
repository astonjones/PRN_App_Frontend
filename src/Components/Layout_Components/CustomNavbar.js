import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <>
        <Navbar className="custom-navbar" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/">PRN</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Leads" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/SearchLead">Search Leads</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/CreateLead">Create Manual Lead</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/reporting">Reporting</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default CustomNavbar;