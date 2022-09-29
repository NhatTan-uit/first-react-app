import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './MyNavBar.css';

function MyNavBar() {
    const [dDMStatus, setDDMStatus] = useState('drop-down-menu-hidden');
    const [dDMLabelStatus, setDDMLabelStatus] = useState('nav-drop-down-hidden');

    return (
        <Navbar bg="navcuatan" variant="light">
            <Container>
                <Navbar.Brand style={{ color: "navy" }} href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <div className='nav-links'>
                        <Link to="/trang1" className='nav-mau-chu'>Trang 1</Link>
                        <Link to="/trang2" className='nav-mau-chu'>Trang 2</Link>
                        <div
                            onMouseLeave={() => {
                                setDDMStatus('drop-down-menu-hidden');
                                setDDMLabelStatus('nav-drop-down-hidden');
                            }}
                            onMouseEnter={() => {
                                setDDMStatus('drop-down-menu');
                                setDDMLabelStatus('nav-drop-down');
                            }}
                            className={dDMLabelStatus}>
                            <Link
                                to="/trang3"
                                className='nav-mau-chu'>Drop down</Link>
                            <div className={dDMStatus}>
                                a
                            </div>
                        </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavBar