import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import Header from '../../Shared/Header/Header';
import './AllServiceDetails.css'

const AllServiceDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(product)

    const { user } = useAuth();

    useEffect(() => {
        const url = `https://morning-ravine-60109.herokuapp.com/addProduct/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    // const [_id, name, image, regularPrice, discountPrice] = product;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleUser = (data, e) => {
        const proceed = window.confirm('Are You Sure, You Buy This Products !!!');

        axios.post(`https://morning-ravine-60109.herokuapp.com/userBuy`, data)
            .then(result => {
                if (proceed) {
                    if (result.data.insertedId) {
                        alert('You Product Add SUccessfully');
                        reset();
                    }
                }
            })

        console.log(data)


    }

    return (
        <div className='mb-5'>
            <Header></Header>


            {product.name ?

                <div className="container booking-details ">
                    {/* Service Details Section */}
                    <div className="row d-flex align-items-center ">
                        {
                            !product.price && product.image &&
                            <div className="col-lg-6 col-md-6 col-12 text-center">
                                <img width="300px" height="300px" src={product.image} alt="" />
                                <h3 className='text-info'>{''}</h3>
                                <h6 className="fw-bold  text-dark "><span className='text-danger fs-4'>Car Name:</span> {product.name}</h6>
                                <p className='text-primary fs-4'>Price:${product.discountPrice}</p>

                            </div>}


                        {product.name &&

                            <div className="col-lg-6 col-md-6 col-12 form-container user-form">
                                <h3 className='text-danger text-center'>User Details</h3>
                                <form className="shipping-form" onSubmit={handleSubmit(handleUser)}>

                                    <input defaultValue={user.displayName}  {...register("UserName", { required: true })} />
                                    <br />{errors.UserName && <span className="text-danger">This field is required</span>}<br />

                                    <input defaultValue={user.email} {...register("email", { required: true })} />
                                    <br /> {errors.email && <span className="text-danger">This field is required</span>}<br />


                                    <input hidden defaultValue='pending' {...register("status",)} />


                                    <input defaultValue={product.name} {...register("productName", { required: true })} />
                                    <br />{errors.productName && <span className="text-danger">This field is required</span>}<br />



                                    <input placeholder="User Address" defaultValue="" {...register("address", { required: true })} />
                                    <br /> {errors.address && <span className="text-danger">This field is required</span>}<br />




                                    <input defaultValue={product.discountPrice} {...register("price", { required: true })} placeholder='Product Cost...' />
                                    <br />{errors.price && <span className="text-danger">This field is required</span>}<br />



                                    <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />
                                    <br /> {errors.phone && <span className="text-danger">This field is required</span>}<br />
                                    <input className="btn addBtn" type="submit" />
                                </form>
                            </div>}
                    </div>
                </div>


                :

                <div className='text-center mx-auto'>
                    <Spinner animation="grow" />
                </ div>

            }




        </div>
    );
};

export default AllServiceDetails;