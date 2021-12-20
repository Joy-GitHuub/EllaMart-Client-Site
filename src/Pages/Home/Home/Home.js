import React from 'react';
import BestOffer from '../../BestOffer/BestOffer/BestOffer';
import SellOffer from '../../BestOffer/SellOffer/SellOffer';
import FlashDeals from '../../FlashDeals/FlashDeals/FlashDeals';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import WhatNows from '../../WhatNows/WhatNows';
import Banner from '../Banner/Banner';
import Exclusives from '../Exclusives/Exclusives';
import HeaderCover from '../HeaderCover/HeaderCover';
import ProductCards from '../ProductCards/ProductCards';
import Review from '../Review/Review';
import Sells from '../Sells/Sells';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HeaderCover></HeaderCover>
            <ProductCards></ProductCards>
            <Exclusives></Exclusives>
            <FlashDeals></FlashDeals>
            <BestOffer></BestOffer>
            <Sells></Sells>
            <WhatNows></WhatNows>
            <Review></Review>
            <SellOffer></SellOffer>

            <Footer></Footer>
        </div>
    );
};

export default Home;