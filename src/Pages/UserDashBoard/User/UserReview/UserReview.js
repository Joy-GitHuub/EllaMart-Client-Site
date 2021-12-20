import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import './UserReview.css'

const UserReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();


    const onSubmit = (data) => {

        // const addData = window.confirm('Are You Sure, You Add This Service')
        const addData = window.confirm('Are You Sure, You Add This Review')


        axios.post(`https://morning-ravine-60109.herokuapp.com/userReview`, data)
            .then(result => {
                if (addData) {
                    if (result.data.insertedId) {
                        alert('Thank You. For Your Review ');
                        reset();
                    }
                }
            })


    }
    const img = 'https://i.ibb.co/q9sd0hp/2799932.png';
    const discriptinImg = 'https://i.ibb.co/87rbnRY/2186059.png';
    return (
        <div>
            <Container>
                <div className="container mb-4 add-service">
                    <h2 className="text-center mb-3">Please Give You Review</h2>
                    <div className="form-container">
                        {/* FORM SECTION */}
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <input hidden defaultValue={user.displayName}  {...register("userName",)} />
                            <input hidden defaultValue={user.email} {...register("email",)} />
                            <input hidden defaultValue={img} {...register("titleImg",)} />
                            <input hidden defaultValue={discriptinImg} {...register("discriptinImg",)} />


                            <input placeholder="Your Review Title" {...register("Title", { required: true, },)} />
                            <br />
                            {errors.Title && <span className="text-danger">This field is required **</span>}<br />

                            <textarea defaultValue='' placeholder="Your Review (Max. 10 Characters) " {...register("description", { required: true })} />
                            <br />

                            {errors.description && <span className="text-danger">This field is required**</span>}<br />

                            <input placeholder='Give You Rating...(1-5)' type="text" {...register("star", { required: true },)} /> <br />

                            {errors.star && <span className="text-danger">This field is required</span>}<br />

                            <button className="btn addBtn" type="submit">Leave Your Review</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UserReview;