import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FlashDeal from '../FlashDeal/FlashDeal';
import './FlashDeals.css'

const FlashDeals = () => {

    const [flashItems, setflashItems] = useState([]);

    useEffect(() => {
        fetch(`https://morning-ravine-60109.herokuapp.com/addProduct`)
            .then(res => res.json())
            .then(data => setflashItems(data))
    }, []);

    return (
        <div>
            <div className='Flasflash-deals container'>
                <div className='d-flex justify-content-between'>
                    <h1 className='Flasflash-deals_h1'>Flash Deals</h1>
                    <Link className='sell-all' to={'/allProducts'}>
                        Sell ALL
                    </Link>

                </div>

                <div className="my-5">
                    <Container>

                        {!flashItems.length ? (
                            <div className="text-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ) : (
                            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                                {
                                    flashItems.slice(0, 3).map(item => <FlashDeal
                                        key={item._id}
                                        item={item}
                                    >
                                    </FlashDeal>)
                                }
                            </Row>
                        )}
                    </Container>
                </div>

            </div>
        </div>
    );
};

export default FlashDeals;