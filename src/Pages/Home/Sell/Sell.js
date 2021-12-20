import React from 'react';
import { Col } from 'react-bootstrap';
import './Sell.css'

const Sell = ({ product }) => {
    const { img } = product;
    return (
        <div>
            <Col>
                <div className="single-sell">
                    <img width="100%" height="320px" src={img} alt="" />

                </div>
            </Col>
        </div>
    );
};

export default Sell;