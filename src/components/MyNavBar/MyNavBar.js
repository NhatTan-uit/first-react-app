import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './MyNavBar.css';

function MyNavBar() {
    return (
        <Navbar bg="navcuatan" variant="light">
            <Container>
                <Navbar.Brand style={{color: "navy"}} href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/trang1" className='nav-mau-chu'>Trang 1</Link>
                    <Link to="/trang2" className='nav-mau-chu'>Trang 2</Link>
                    <Link to="/trang3" className='nav-mau-chu'>Trang 3</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavBar