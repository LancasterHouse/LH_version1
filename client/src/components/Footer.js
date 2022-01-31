import React from 'react';
// import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
// import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import logo from '../images/lhlogo.png';
// import kpch from '../images/KPCHHeadshot.jpg';

const Footer = () => {
    return (
        <div className="main-footer">
            <Container>
            
                <Row>                
                    {/* Column 1 */}
                   
                    <Col>
                     <img src={logo} alt="logo" className="footer-image" />
                    </Col>                    
                  
                    {/* Column 2 */}
                    <Col>
                      {/* <h4>Lancaster House</h4> */}
                        <ul className="footer-list">
                            <li>188 Yonge Street, Suite 200</li>
                            <li>Toronto, On M4S 3C4</li>

                            <li>Canada</li>

                            <li>Tel: 416-977-6618</li>

                            <li>Toll Free: 1-888-298-8841</li>

                            <li>Fax: 416-977-5873</li>
                            <li>E-mail: </li>
                            <li>customerservice@lancasterhouse.com</li>

                        </ul>
                    </Col>
                   
                    {/* Column 3 */}
                    <Col>
                         <ul className="footer-list">
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>

                            <li><a href="#">Refund Policy</a></li>

                            <li><a href="#">Legal Notice</a></li>

                            <li><a href="#">AODA Policy</a></li>

                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Join Our Team</a> </li>
                            <li><a href="#">Contact</a></li>

                        </ul>
                    </Col>
                        
                   
                </Row>

                <Row>
                    <Col>
                        <p>The land on which Lancaster House operates is the traditional territory of the Mississaugas of the Credit, the Anishnabe, Haudensosaunee, and the Wedat peoples, and it is now home to many diverse First Nations, Inuit and Métis.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer


