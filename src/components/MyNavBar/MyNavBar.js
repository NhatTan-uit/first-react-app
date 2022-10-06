import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SearchBar from '../functionality/SearchBar/SearchBar';
import LoginButton from '../functionality/LoginButton/LoginButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MediaQuery from 'react-responsive'
import './MyNavBar.css';

function MyNavBar() {
    const [dDMStatus, setDDMStatus] = useState('drop-down-menu-hidden');
    const [dDMLabelStatus, setDDMLabelStatus] = useState('nav-drop-down-hidden');

    return (
        <div>
            <MediaQuery minWidth={992}>
                <Navbar bg="navcuatan" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand style={{ color: "navy" }} href="#home">Navbar</Navbar.Brand>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-false`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                            placement="end"
                            show={false}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                    Sidebar
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="m-auto">
                                    <div className='nav-links'>
                                        <div className="nav-links-items">
                                            <Link to="/trang1" className='nav-mau-chu'>Trang 1</Link>
                                        </div>
                                        <div className="nav-links-items">
                                            <Link to="/trang2" className='nav-mau-chu'>Trang 2</Link>
                                        </div>
                                        <div className="nav-links-items">
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
                                        <div className="nav-links-items">
                                            <Link to="/trang2" className='nav-mau-chu'>Trang 2</Link>
                                        </div>
                                    </div>
                                </Nav>
                                <SearchBar />
                                <Nav.Item className="m-auto">
                                    <LoginButton />
                                </Nav.Item>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <Navbar bg="navcuatan" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand style={{ color: "navy" }} href="#home">Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-false`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                    Sidebar
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="m-auto">
                                    <div className='nav-links'>
                                        <div className="nav-links-items">
                                            <Link to="/trang1" className='nav-mau-chu'>Trang 1</Link>
                                        </div>
                                        <div className="nav-links-items">
                                            <Link to="/trang2" className='nav-mau-chu'>Trang 2</Link>
                                        </div>
                                        <div className="nav-links-items">
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
                                        <div className="nav-links-items">
                                            <Link to="/trang2" className='nav-mau-chu'>Trang 2</Link>
                                        </div>
                                    </div>
                                </Nav>
                                <SearchBar />
                                <Nav.Item className="m-auto">
                                    <LoginButton />
                                </Nav.Item>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </MediaQuery>
        </div>
    )
}

export default MyNavBar