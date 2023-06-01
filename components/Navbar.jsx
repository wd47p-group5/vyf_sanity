import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';
import vyfLogo from '../public/vyf-logo.webp'

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <div className='dark:text-[#292F36] text-white cursor-pointer'>
        <Link className='flex items-center p-5 gap-1 font-bold text-2xl text-[#292F36]' href={'/'}>
          <div className='flex items-center text-2xl font-extrabold gap-1 p-3'>
            <Image src={vyfLogo} width="60" height="52" /> 
            <span className='logo'>VYF Store</span>
          </div>
        </Link>
      </div>

      <button type="button" className='dark:text-[#292F36] text-white cart-icon mr-10' 
      onClick={() => setShowCart(true)}>
        <AiOutlineShopping className='dark:text-[#292F36] text-white' />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && 
        <Cart/>      
      }
    </div>
  )
}

export default Navbar