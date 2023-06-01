import React from 'react';
import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ({productData, bannerData}) => (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Our Products</h2>
      </div>

      <div className='products-container'>
        {productData?.map((product)=>
        <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const productData = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {productData, bannerData}
  }
}

export default Home