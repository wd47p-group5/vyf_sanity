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
    <div className='flex items-center justify-end cart-wrapper text-[#292F36] dark:text-white' ref={cartRef}>
      <div className='cart-container'>
        <div className='ml-5 flex flex-row items-center gap-2 text-lg'>
          &gt;
          <button type="button" className='cart-icon' onClick={() => setShowCart(false)}>
            <div className=''>
              <AiOutlineShopping className='text-[2rem] text-[#292F36]' /> <span className='cart-item-qty flex items-center text-center mt-[-1.625rem]'>{totalQuantities}</span>
            </div>
          </button>
          </div>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty.</h3>
            <Link href='/'>
              <button type='button' onClick={()=>setShowCart(false)} className='btn-darkmode'>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.sort((a,b) => a.orderValue > b.orderValue ? 1 : -1).map((item)=>(
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image'/>
              <div className='item-desc'>
                  <button type='button'
                  className='remove-item'
                  onClick={()=> onRemove(item)}
                  >
                    <TiDeleteOutline/>
                  </button>
                <div className='flex'>
                  <h5>{item.name}</h5>
                  <h4>&#8369;{item.price}</h4>
                </div>
                
                    <div className='flex flex-row justify-start w-10 items-center text-center rounded-md quantity-desc'>
                      <span className='cursor-pointer font-medium' onClick={()=>toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                      <span className='cursor-default'>{item.quantity}</span>
                      <span className='cursor-pointer font-medium' onClick={()=>toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                    </div>
                
                  
                
              </div>
            </div>
          ))
          } 
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>&#8369;{totalPrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h3>
            </div>
            <div className='btn-container'>
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