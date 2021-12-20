import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'

const AddProducts = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const defaultImg = 'https://i.ibb.co/1GJ00hr/77305990.jpg';



    const onSubmit = (data) => {
        const addData = window.confirm('Are You Sure, You Add This Products');;

        axios.post(`https://morning-ravine-60109.herokuapp.com/addProduct`, data)
            .then(result => {
                if (addData) {
                    if (result.data.insertedId) {
                        alert('You Product Add SUccessfully');
                        reset();
                    }
                }
            })

        console.log(data)



    }



    return (
        <div>
            <div className="container mb-4 add-service">
                <h2 className="text-center mb-3">Add a new Cars</h2>
                <div className="form-container">
                    {/* FORM SECTION */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue='' placeholder="Product Name...."  {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={defaultImg} placeholder="Image URL" {...register("image", { required: true, },)} />
                        <br />
                        {errors.image && <span className="text-danger">This field is required</span>}<br />
                        <input defaultValue='' placeholder="Regular Laptop Cost...." type="number" {...register("regularPrice", { required: true })} />

                        <br />

                        {errors.regularPrice && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue='' placeholder="Laptop Cost...." type="number" {...register("discountPrice", { required: true })} />
                        <br />
                        {errors.discountPrice && <span className="text-danger">This field is required</span>}<br />

                        <button className="btn addBtn" type="submit">Add Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;