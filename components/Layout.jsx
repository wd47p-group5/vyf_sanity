import React from 'react'
import Head from 'next/head'
import { Footer, Navbar } from '.'

const Layout = ({children}) => {
  return (
    <div className='dark:bg-white bg-[#292F36] dark:text-[#292F36] text-white'>
      <Head>
        <title>VYF Store</title>
        <meta name="author" content="VYF Networks, Inc." />
        <meta name="description" content="Official Website of VYF Networks, Inc." />
        <meta name="keywords" content="VYF Networks, Inc., E-commerce, Website" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden'>
        {children}      
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout