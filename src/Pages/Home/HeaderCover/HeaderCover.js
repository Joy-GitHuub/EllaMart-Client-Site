import React from 'react';
import './HeaderCover.css'
import { Col, Container, Row } from 'react-bootstrap';
import logo1 from '../../../Images/icon/download1.png';
import logo2 from '../../../Images/icon/download2.png';
import logo3 from '../../../Images/icon/download3.png';
import logo4 from '../../../Images/icon/download4.png';


const HeaderCover = () => {
    return (
        <div className='my-1'>
            <div className='service-part'>
                <Container>
                    <Row className='service-container'>
                        <Col lg={3}>
                            <div className="songle-service">
                                <div className="service-thumb">
                                    <img src={logo1} alt="" />
                                </div>
                                <div className="service-text">
                                    <h5>Free Delivery</h5>
                                    <p>free shopping on all order</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="songle-service">
                                <div className="service-thumb">
                                    <img src={logo2} alt="" />
                                </div>
                                <div className="service-text">
                                    <h5>Online Support 24/7</h5>
                                    <p>Support online 24 hours</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="songle-service">
                                <div className="service-thumb">
                                    <img src={logo3} alt="" />
                                </div>
                                <div className="service-text">
                                    <h5>Money Return</h5>
                                    <p>Back guarantee under 7 days</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="songle-service">
                                <div className="service-thumb">
                                    <img src={logo4} alt="" />
                                </div>
                                <div className="service-text">
                                    <h5>Member Discount</h5>
                                    <p>Onevery order over $30.00</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HeaderCover;