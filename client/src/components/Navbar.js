// import { format } from 'express/lib/response';
import { Router } from 'express';
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container  } from 'react-bootstrap';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';


export const NavbarComp = () => {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg" >
                        
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About us</Nav.Link>                            
                                <NavDropdown title="Conference & Training" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Conferences</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Upcoming Webinars</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Professional Learning Program</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Webinar & Audio Conference Library</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Skills Training</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">Customized Training</NavDropdown.Item>


                                    {/* <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                                <Nav.Link href="#link">First Resort</Nav.Link>
                                <Nav.Link href="#link">Unionized Workplace Law</Nav.Link>
                                <Nav.Link href="#link">Events Calander</Nav.Link>
                                <Nav.Link href="#link">Publications</Nav.Link>
                                <Nav.Link href="#link">Labour Arbitration in Canada</Nav.Link>

                                
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
        </Router>
    );
};

export default NavbarComp; 