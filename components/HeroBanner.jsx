import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import AirPodsPink from '../public/airpods_bg.png';
import HeroBg2 from '../public/iphone-14-pro.png';
import AppleWatch from '../public/assets/apple_watch.jpg';
import iPad from '../public/assets/ipad.jpg';
import MacbookPromo from '../public/assets/macbook_promo.jpg';
import AirpodsPromo from '../public/assets/promo_airpods.jpg';
import AppleWatchLogo from '../public/assets/watch_logo.png';

const HeroBanner = ({heroBanner}) => {
  return (
    
    <>
    <section className="bg-white dark:bg-[#292F36] text-[#292F36] dark:text-white">
    <div className="hero-banner-container">
      <div className="mb-10 lg:hidden lg:mt-0 lg:col-span-5">
            <Image src={HeroBg2} />
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
          <Image src={HeroBg2} />
        </div>                
    </div>

    </section>
    
    <div className='bg-white rounded-lg shadow-2xl px-10 py-16 mx-10 my-20 flex items-center flex-col-reverse md:hidden'>
      <Link type='button' href='/products/hehe'>
        Buy now
      </Link>
      <div className='text-gray-600 mt-5 text-center mb-5'>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</div>
      <div className='text-6xl font-extrabold text-[#292F36] text-center'>AirPods Max</div>
      <div className='w-full'>
        <Image src={AirPodsPink} alt='AirPods Pro Pink' />
      </div>
    </div>

    <div className='bg-white rounded-lg shadow-2xl px-10 py-16 mx-10 my-20 md:flex items-center flex-col-reverse hidden'>
      <Link type='button' href='/product/AirPods Max Pink'>
        Buy now
      </Link>
      <div className='text-gray-600 mt-16 text-center mb-7'>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</div>
      <div className='relative text-[5rem] font-extrabold text-[#292F36] text-center mt-16 mb-20 tracking-wider leading-1'>
        AirPods Max
        <div className='absolute top-[-6rem] w-full z-10'>
          <Image src={AirPodsPink} alt='AirPods Pro Pink' />
        </div>
      </div>
    </div>

    <section className="bg-[#f5f5f7] text-[black] mt-20">
        <div className="">
            
            <div className="flex items-center flex-col px-4">
                <h2 className='text-6xl mt-20 font-extrabold text-[#292F36] text-center'>Apple Watch</h2>
                <div className='text-gray-600 font-medium text-3xl mt-5 text-center mb-5'>41mm <span className='pride-color font-semibold'>Pride Edition</span> Sport Band - S/M</div>
                <p className='font-normal text-xl mt-1 mb-2 text-center'><span className='font-semibold'>₱18,880</span></p>
                    <Link className='mt-5 items-center' type='button' href='/product/'>
                    Buy now
                    </Link> 
            </div>

            <div className="footer-image">
                <Image src={AppleWatch} />
            </div>  

        </div>
    </section>

    <div className='bg-transparent grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-5 '>
      <div className='text-white bg-blue-300'>
        <div className='w-full'>
          <Image src={MacbookPromo} alt='AirPods Pro Pink' />
        </div>
      </div>

      <div className='text-white bg-yellow-300'>
        <div className='w-full'>
          <Image src={AirpodsPromo} alt='AirPods Pro Pink' />
        </div>
      </div>
    </div>

    
    </>
  )
}

export default HeroBanner