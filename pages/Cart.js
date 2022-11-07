import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Cart = () => {
const items = useContext(UserContext)


const removeItem = (id) => {

    const updateCart = items.items.map((i) => {
        if(i.id === id){
          return { ...i ,quantity : i.quantity - 1, price:i.price*i.quantity}
        }
        return i
      })
    
      items.setItem(updateCart)

}

const addItem = (id) => {

    const updateCart = items.items.map((i) => {
        if(i.id === id){
          return { ...i ,quantity : i.quantity + 1, price:i.price*i.quantity}
        }
        return i
      })
    
      items.setItem(updateCart)

}


  return (
    <div className=''>
<p>No items in Cart</p>

{items.items.length > 0 && 

items.items.map((item) => (<div className='flex justify-around items-center' key={item.id}>
    {/* <p>{items.items.length}</p> */}
        <img src={item.image} className="h-32 w-32" alt="" />
        <p> price : {item.price}</p>
        <button className='px-6 py-1 bg-cyan-400 rounded-lg m-3 flex items-center justify-center text-xl' onClick={() => removeItem(item.id)}>-</button>
        <p>{item.quantity}</p>
        <button className='px-6 py-1 bg-cyan-400 rounded-lg m-3 flex items-center justify-center text-xl' onClick={() => addItem(item.id)}>+</button>
</div>
    
))

}
      


           
    </div>
  )
}

export default Cart