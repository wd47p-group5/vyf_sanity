import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import HeroBg from '../public/iphone-hero.png';

const HeroBanner = ({heroBanner}) => {
  return (
    
    <section className="bg-white dark:bg-[#292F36] text-[#292F36] dark:text-white">
    <div className="hero-banner-container">
      <div className="mb-10 lg:hidden lg:mt-0 lg:col-span-5">
            <Image src={HeroBg} />
      </div> 
        <div className="hero-banner-content">
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking leading-none md:text-5xl xl:text-6xl dark:text-white'>iPhone 14 Pro Max</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            The iPhone 14 Pro and Pro Max feature a Super Retina XDR OLED display with a typical maximum brightness of 1,000 nits.
            </p>
            <div className='flex text-start items-center justify-start'>
              <p className="inline-flex items-center justify-center py-3 mr-5 text-3xl font-semibold text-start text-[#292F36] dark:text-white">
                {heroBanner.midText} {heroBanner.largeText1}
              </p>
              <Link className='btn-darkmode' type='button' href={`/product/${heroBanner.product}`}>
                {heroBanner.buttonText}
              </Link> 
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={HeroBg} />
        </div>                
    </div>
    </section>
    
  )
}

export default HeroBanner