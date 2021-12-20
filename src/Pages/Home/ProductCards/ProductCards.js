import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCards.css'


const ProductCards = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./facedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="my-5">
                <Container>

                    {!products.length ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                            {
                                products.map(product => <ProductCard
                                    key={product.id}
                                    product={product}
                                >

                                </ProductCard>)
                            }
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default ProductCards;