import React, { useEffect, useState } from 'react';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';

const ManageAllProducts = ({ product, id }) => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://morning-ravine-60109.herokuapp.com/allServices`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    return (
        <div >
            <h3>All Manage Products {products.length}</h3>
            {/* Products Map */}

            <div className='row row-cols-1 row-cols-md-3 my-5 g-4 container'>
                {
                    products.map(product => <ManageAllProduct
                        key={product._id}
                        id={product._id}
                        product={product}
                    ></ManageAllProduct>)
                }
            </div>


        </div>
    );
};

export default ManageAllProducts;