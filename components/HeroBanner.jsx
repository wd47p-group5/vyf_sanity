import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    
    <section className="bg-white dark:bg-[#292F36] text-[#292F36] dark:text-white">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mb-10 lg:hidden lg:mt-0 lg:col-span-5">
            <img src={urlFor(heroBanner.image)} alt="mockup" />
        </div> 
        <div className="px-7 sm:text-center md:text-left place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking leading-none md:text-5xl xl:text-6xl dark:text-white">{heroBanner.product}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {heroBanner.desc}
            </p>
            <div className='flex text-center items-center justify-start'>
            <p className="inline-flex items-center justify-center py-3 mr-5 text-3xl font-semibold text-center text-[#292F36] dark:text-white">
              {heroBanner.midText} {heroBanner.largeText1}
            </p>
            <Link className='btn-darkmode' type='button' href={`/product/${heroBanner.product}`}>
              {heroBanner.buttonText}
            </Link> 
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={urlFor(heroBanner.image)} alt="mockup" />
        </div>                
    </div>
    </section>
    
  )
}

export default HeroBanner