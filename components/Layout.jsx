import React from 'react'
import Head from 'next/head'
import { Footer, Navbar } from '.'

const Layout = ({children}) => {
  return (
    <div className='layout dark:bg-white bg-[#292F36] dark:text-[#292F36] text-white'>
      <Head>
        <title>VYF Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}      
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout