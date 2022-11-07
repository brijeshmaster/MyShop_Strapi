import React, { useContext } from 'react'
import Link from "next/link"
import UserContext from '../context/UserContext'

const Navbar = () => {

const item = useContext(UserContext)

  return (
    

  <div className="  flex flex-wrap justify-around p-5 flex-col md:flex-row  md:justify-between items-center w-full"> 
  <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:ml-5">
   <img width={28} src="logo.svg" alt="" />
      <span className="ml-3 text-xl">MyShop</span>
    </Link>
            <nav className=" flex flex-wrap items-center text-base justify-center gap-x-10">
          <Link href="/" className='mr-5 hover:text-gray-900'> Home</Link>
          <Link href="/Products" className='mr-5 hover:text-gray-900'> Products</Link>
          <Link href="/Contact" className='mr-5 hover:text-gray-900'> Contact</Link>
          <Link href="/About" className='mr-5 hover:text-gray-900'> About</Link>
          <Link href="/Cart" className='mr-5 hover:text-gray-900'> Cart  {item.items.length}</Link>
            </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1.5 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:mr-10">
      Login
    
    </button>
  </div>





  )
}

export default Navbar