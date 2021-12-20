import React from 'react';
import { Carousel } from 'react-bootstrap';

import './WhatNows.css'
import first from '../../Images/icon/download.jfif';
import second from '../../Images/icon/download (1).jfif';
import thrid from '../../Images/icon/download (2).jfif';

const WhatNows = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                {/* <div className='what-title'>
                    <h2>What's Now</h2>
                </div>
                <div className='ms-5'>
                    <Link className='sell-all ' to={'/'}>
                        Sell ALL
                    </Link>
                </div> */}
                <div className='row'>
                    <div className='col-lg-7 col-md-6 col-12'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={first}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={second}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={thrid}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='col-lg-5 col-md-6 col-12 '>
                        <img className='w-100' src="https://i.ibb.co/fk5Xg4P/feature-banner-1-5050a224-50f4-423d-adfb-6ba291f1db21-970x.jpg" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatNows;