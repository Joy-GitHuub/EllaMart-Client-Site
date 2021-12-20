// import { Rating } from '@mui/material';
import React from 'react';

const ReviewCard = ({ userReview }) => {
    const { userName, Title, titleImg, discriptinImg, description } = userReview;
    // const parsed = JSON.parse(star);
    return (
        <div>
            <div>
                {/* User Review Card */}
                <div className="card" >
                    <div className="card-body">
                        <h6 className="card-title"><span style={{ fontSize: 10 }} className=' text-primary'><i className="fas fa-user fs-5"></i> &nbsp;&nbsp;{userName}</span></h6>
                        <hr />
                        <p className="card-subtitle mb-2 text-muted"><img width='20px' src={titleImg} alt="" /> <sapn className='text-info'>{Title}</sapn></p>
                        <p className="card-text"> <img width='22' src={discriptinImg} alt="" /> {description}</p>
                        <hr />

                        <span className='text-info'>Rating </span>
                        {/* <Rating
                            initialRating={parsed}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        /> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;