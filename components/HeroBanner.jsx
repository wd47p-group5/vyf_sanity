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
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{heroBanner.product}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {heroBanner.desc}
            </p>
            <div className='flex text-center items-center'>
            <p href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-2xl font-semibold text-center text-[#292F36] dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                {heroBanner.largeText1} {heroBanner.midText}
            </p>
            <Link type='button' href={`/product/${heroBanner.product}`} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-[#292F36] border-gray-300 rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-[#292F36] dark:bg-white dark:border-gray-700 dark:hover:bg-gray-200 dark:focus:ring-gray-800">
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