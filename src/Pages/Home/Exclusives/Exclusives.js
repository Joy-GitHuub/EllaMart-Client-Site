import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Exclusive from '../Exclusive/Exclusive'
import './Exclusives.css'

const Exclusives = () => {

    const [exclusives, setExclusives] = useState([]);

    useEffect(() => {
        fetch('./exclusive.json')
            .then(res => res.json())
            .then(data => setExclusives(data))
    }, [])

    return (
        <div>
            <div className="my-5">
                <Container>

                    {!exclusives.length ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                            {
                                exclusives.map(product =>
                                    <Exclusive key={product.id}
                                        product={product}
                                    >

                                    </Exclusive>)
                            }
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default Exclusives;