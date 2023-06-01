import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import footerImage from '../public/ipad-pro.jpg'

const FooterBanner = ({footerBanner: 
    {
        discount, 
        largeText1, 
        largeText2, 
        image, 
        saleTime,
        midText,
        product,
        buttonText,
        smallText,
        desc
    }}) => {
  return (
    <>

    <section className="bg-black text-white mt-20">
        <div className="footer-banner-container">
            
            <div className="banner-desc">
                <h2>IPAD PRO</h2>
                <h3 className='font-semibold text-4xl'>Supercharged by M2</h3>
                <p className='font-normal text-xl mt-1 mb-2'>Price starts <span className='font-semibold'>₱55,990.00</span></p>
                    <Link className='mt-5' type='button' href='/product/'>
                    Buy now
                    </Link> 
            </div>

            <div className="footer-image">
                <Image src={footerImage} />
            </div>  

        </div>
    </section>

    </>
  )
}

export default FooterBanner