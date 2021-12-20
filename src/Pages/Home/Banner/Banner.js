import React from 'react';
import header from '../../../Images/Home_Banner/3255317.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='row  gx-0'>
                <div className='col-lg-6 col-md-6 col-12 ps-5'>
                    <div className='mt-5 '>
                        <h1 className='header-title'>SHOP WISE WITH PRICE COMPARISONS</h1>
                        <h6 className='sell'>Sell Up to 70% of on selected items*</h6>
                    </div>
                    <div className='header-btn'>
                        <button className='btn-header'>Shop Now</button>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-12'>
                    <img className='img-fluid ps-3' src={header} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;