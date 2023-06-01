import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill}  from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0)
        runFireworks();
    }, [])
    

    return (
        <div className='success-wrapper'>
            
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill/>
                </p>
                <h2>Thank you for buying our products!</h2>
                <p>Check your email inbox for the receipt.</p>
                <p>If you have any questions, please email us @</p>
                <a className='bg-transparent text-[#292f36] border-none underline font-semibold text-xl hover:bg-transparent hover:text-gray-900' href='mailto:vyfnetworksinc4@gmail.com'>vyfnetworksinc4@gmail.com</a>
                
                <Link href="/">
                    <button type='button' width="300px" className='btn-safe mt-5'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Success