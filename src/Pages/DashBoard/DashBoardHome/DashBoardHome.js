import React from 'react';

const DashBoardHome = () => {

    const welcome = 'https://i.ibb.co/zhzW4Cw/welcame.jpg';
    return (
        <div className='text-center'>
            <img width='80%' className='img-fluid' src={welcome} alt="" />
        </div>
    );
};

export default DashBoardHome;