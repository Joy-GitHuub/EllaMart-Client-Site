import React from 'react';
import { Col } from 'react-bootstrap';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { img } = product
    return (
        <div>
            <Col>
                <div className="single-products">
                    <img width="100%" height="250px" src={img} alt="" />

                </div>
            </Col>
        </div>
    );
};

export default ProductCard;