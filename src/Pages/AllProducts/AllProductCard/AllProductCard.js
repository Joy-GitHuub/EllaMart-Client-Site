import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProductCard = ({ item }) => {
    const { _id, image, name, regularPrice, discountPrice } = item;
    return (
        <div>
            <Col>
                <div className="single">
                    <img width="100%" height="250px" src={image} alt="" />
                    <div className="product-des">
                        <h3>{name}</h3>

                        <p className="price"><strike
                        ><span className='text-danger pe-1'>${regularPrice}</span> </strike> &nbsp;  From ${discountPrice}</p>
                        <Link to={`/bookingDetails/${_id}`}>
                            <button className="regular-btn">
                                Buy Now <i className="fas fa-arrow-right"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default AllProductCard;