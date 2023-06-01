import React, {useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight, AiOutlineShopping } from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getstripe'

const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity,onRemove} = useStateContext();
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <div className='ml-5 flex flex-row items-center gap-2 text-lg'>
          &gt;
          <button type="button" className='cart-icon' onClick={() => setShowCart(false)}>
            <div>
              <AiOutlineShopping className='text-[2rem] text-[#292F36]' /> 
              <span className='cart-item-qty flex items-center text-center mt-[-1.625rem]'>{totalQuantities}</span>
            </div>
          </button>
        </div>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            
            <AiOutlineShopping className=' text-[#2563eb]' size={150}/>
            <h3>Your shopping bag is empty.</h3>
            <Link href='/'>
              <button type='button' onClick={()=>setShowCart(false)} className='btn-default'>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.sort((a,b) => a.orderValue > b.orderValue ? 1 : -1).map((item)=>(
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image'/>
                <div className='flex items-center md:items-start flex-col'>
                    <button type='button' className='remove-item' onClick={()=> onRemove(item)}>
                      <TiDeleteOutline/>
                    </button>
                  <div className='text-center md:text-start py-2 text-[#292F36]'>
                    <h5 className='text-xl font-semibold'>{item.name}</h5>
                    <h4 className='text-[#3a95d2]'>&#8369;{item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h4>
                  </div>
                  
                      <div className='flex flex-row justify-start items-center text-[#292F36] text-center rounded-md quantity-desc gap-5'>
                        <span className='cursor-pointer' onClick={()=>toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                        <span className='quantity-count cursor-default '>{item.quantity}</span>
                        <span className='cursor-pointer font-medium' onClick={()=>toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                      </div>
                          
                </div>
            </div>
          ))
          } 
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='text-center text-2xl'>
              <h3>Your bag total is:</h3>
              <h3 className='text-3xl font-semibold'>&#8369;{totalPrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h3>
            </div>
            <div className='items-center'>
              <button type='button' className='btn-alt' onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart