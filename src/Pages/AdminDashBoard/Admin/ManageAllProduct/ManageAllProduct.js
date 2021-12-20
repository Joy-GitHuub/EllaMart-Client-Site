import React, { useEffect, useState } from 'react';

const ManageAllProduct = ({ product, }) => {

    const { _id } = product;
    const [allproduct, setAllProduct] = useState([])
    useEffect(() => {
        const url = `https://morning-ravine-60109.herokuapp.com/allServices`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllProduct(data))

    }, []);

    const handleDelete = (id, e) => {
        const deleteSure = window.confirm('Are You Sure You Delete Your Booking');
        if (deleteSure) {
            const url = `https://morning-ravine-60109.herokuapp.com/allServices/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('SuccessFully Delete');
                        const remaining = allproduct.filter(order => order._id !== id);
                        setAllProduct(remaining)
                        // window.location.reload()
                    }
                })
        }

    }


    return (
        <div>
            <div>
                <div className="card">
                    <img style={{ width: '100%', height: '167px' }} src={product.image} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text " style={{ fontSize: 15 }}>{product.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <button onClick={() => handleDelete(_id)} type="button" className="btn btn-outline-danger" >Delete</button>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ManageAllProduct;