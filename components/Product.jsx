import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({product:{image, name, slug, price}}) => {
  return (
    <div>
      
        <Link href={`/product/${slug.current}`}>
            <div className='shadow-lg rounded-lg py-5 px-5 flex flex-row w-[25rem] bg-white text-[#292F36]'>
              <div>
                <p className='text-base pt-5 font-extrabold'>{name}</p>
                <img src={urlFor(image && image[0])} className="hover:scale-110 h-auto w-96 p-5" />
                <div className='flex items-center justify-between py-5'>
                  <p className='text-2xl font-semibold'>&#8369;{price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                  <button type='button' className='btn-default'>Buy</button>
                </div>
              </div>
            </div>
        </Link>
        
    </div>
  )
}

export default Product