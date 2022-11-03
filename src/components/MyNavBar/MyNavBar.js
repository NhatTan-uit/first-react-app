import React, { useState, useEffect } from 'react'

import axios from 'axios';

import Dropdown from 'react-bootstrap/Dropdown';
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MediaQuery from 'react-responsive'

import { Link } from 'react-router-dom';

import SearchBar from '../functionality/SearchBar/SearchBar';
import LoginButton from '../functionality/authorization/LoginButton/LoginButton';

import './MyNavBar.css';

function MyNavBar() {
    const [dDMStatus, setDDMStatus] = useState('drop-down-menu-hidden');
    const [dDMLabelStatus, setDDMLabelStatus] = useState('nav-drop-down-hidden');

    const [userImage, setUserImage] = useState('');

    const checkIfLoggedUser = localStorage.getItem('user');

    useEffect(() => {
        axios.get(`http://localhost:4000/userinfo/showuser/${checkIfLoggedUser}`)
            .then(res => {
                setUserImage(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <MediaQuery minWidth={992}>
                <Navbar bg="navcuatan" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand style={{ color: "navy" }} href='/'>Navbar</Navbar.Brand>
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
                                            <Link to="/trang3" className='nav-mau-chu'>Trang 3</Link>
                                        </div>
                                    </div>
                                </Nav>
                                <SearchBar />
                                {
                                    checkIfLoggedUser != null ?
                                        <Nav.Item className="m-auto">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline" id="dropdown-basic">
                                                    <Image
                                                        className='nav-user-image'
                                                        src={userImage.UserImage}
                                                        roundedCircle
                                                    />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/changeimage">Change User Image</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item onClick={
                                                        () => {
                                                            localStorage.removeItem('user');
                                                            window.location.reload();
                                                        }}>Logout</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Nav.Item>
                                        : <Nav.Item className="m-auto">
                                            <LoginButton />
                                        </Nav.Item>
                                }
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <Navbar bg="navcuatan" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand style={{ color: "navy" }} href="/">Navbar</Navbar.Brand>
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
                                            <Link to="/trang3" className='nav-mau-chu'>Trang 3</Link>
                                        </div>
                                    </div>
                                </Nav>
                                <SearchBar />
                                {
                                    checkIfLoggedUser != null ?
                                        <Nav.Item className="m-auto nav-user-margin">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline" id="dropdown-basic">
                                                    <Image
                                                        className='nav-user-image'
                                                        src={userImage.UserImage}
                                                        roundedCircle
                                                    />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/changeimage">Change User Image</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item onClick={
                                                        () => {
                                                            localStorage.removeItem('user');
                                                            window.location.reload();
                                                        }}>Logout</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Nav.Item>
                                        : <Nav.Item className="m-auto">
                                            <LoginButton />
                                        </Nav.Item>
                                }
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </MediaQuery>
        </div>
    )
}

export default MyNavBar