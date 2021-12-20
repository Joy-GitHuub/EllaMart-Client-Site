import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {

    const [usersReview, setUsersReview] = useState([]);

    useEffect(() => {
        const url = `https://morning-ravine-60109.herokuapp.com/userReview`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsersReview(data))
    })

    return (
        <div>
            <div className='text-center mb-5 container'>

                <h3 className='find-out mt-5'>Our User Reviews <br />---------------------------</h3>
                <div className='row row-cols-1 row-cols-md-4 my-5 g-4 container'>

                    {
                        usersReview.map(userReview => <ReviewCard
                            key={userReview._id}
                            userReview={userReview}
                        >

                        </ReviewCard>)
                    }
                </div>





            </div>
        </div>
    );
};

export default Review;