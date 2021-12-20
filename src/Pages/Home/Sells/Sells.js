import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Sell from '../Sell/Sell';

const Sells = () => {

    const [sells, setSells] = useState([]);

    useEffect(() => {
        fetch('./sell.json')
            .then(res => res.json())
            .then(data => setSells(data))
    }, [])

    return (
        <div>
            <div className="my-5">
                <Container>

                    {!sells.length ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                            {
                                sells.map(product => <Sell
                                    key={product.id}
                                    product={product}
                                ></Sell>)
                            }
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default Sells;