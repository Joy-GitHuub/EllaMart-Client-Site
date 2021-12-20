import React from 'react';
import { Col } from 'react-bootstrap';
import './Exclusive.css'

const Exclusive = ({ product }) => {
    const { img } = product
    return (
        <div>
            <Col>
                <div className="single-product">
                    <img width="100%" height="320px" src={img} alt="" />

                </div>
            </Col>
        </div>
    );
};

export default Exclusive;