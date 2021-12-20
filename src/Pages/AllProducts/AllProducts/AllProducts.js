import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import AllProductCard from '../AllProductCard/AllProductCard';
import Header from '../../Shared/Header/Header'

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const url = `https://morning-ravine-60109.herokuapp.com/addProduct`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [allProducts])

    return (
        <div>
            <Header></Header>
            <div className='Flasflash-deals container'>
                <div className='d-flex justify-content-between'>



                </div>

                <div className="my-5">
                    <Container>

                        {!allProducts.length ? (
                            <div className="text-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ) : (
                            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                                {
                                    allProducts.map(item => <AllProductCard
                                        key={item._id}
                                        item={item}
                                    ></AllProductCard>)
                                }
                            </Row>
                        )}
                    </Container>
                </div>

            </div>
        </div>
    );
};

export default AllProducts;