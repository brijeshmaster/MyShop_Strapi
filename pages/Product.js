import React from 'react'
import Link from "next/link"

const Product = ({image,category,title,price, redirect}) => {
  return (
    <>

<div  className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <Link href={redirect} className="block relative h-48 rounded overflow-hidden">
          <img 
  
            className="object-contain object-center w-full h-full block cursor-pointer "
            src={image}
            alt="ecom"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${price}</p>
         
        </div>
      </div>
    </>
  )
}

export default Product