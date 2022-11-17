import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css'

function Home({ toHome }) {
    return (
        <Container style={{ margin: "20px 0px" }} fluid>
            <Row>
                <Col lg={9}>
                    <Row className="justify-content-center" lg={5} md={4} xs={3}>
                        {toHome ? toHome.reverse().map((truyen, key) => (
                            <Col key={key} className="book-item">
                                <img alt="hinhtruyen" src={truyen.HinhAnh} />
                                <a href="#" className='book-item-title'>{truyen.TieuDe}</a>
                                {truyen.Chapter.reverse().map((chapter, key1) => {
                                    if (key1 < 3) {
                                        return <a href="#" key={key1}>{chapter}</a>
                                    }
                                    else {
                                        return <p></p>
                                    }
                                })}
                            </Col>
                        )) : <div>Error Occurs</div>}
                    </Row>
                </Col>
                <Col lg={3}>
                    a
                </Col>
            </Row>
        </Container>
    )
}

export default Home