import Navbar from '../component/Navbar'
import UserState from '../context/UserState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return <>
  <UserState>
    
<Navbar />  
<Component {...pageProps} />
  </UserState>
  </>
}

export default MyApp











// const [cart, setCart] = useState([])

// const addToCart = (img, title, price, qty) => {


//   let isInclude = cart.find(item => item.title === title);

//   console.log("inc b", isInclude)
//   if (isInclude == null) {
//     setCart([...cart,{img, title, price, qty: qty }])
//   } else {

//     setCart(cart.map( i => {
//       if(i.title === title){
//         return {...i,img, title, price, qty: qty + 1 }
//       }
//       return {...i,img, title, price, qty: qty }
//     }))
//     console.log("ae")
    
//   }
//   console.log("inc a", isInclude)
//   console.log("Cart is e : ", cart)

// }

// useEffect(() => {

//   console.log("Cart is : ", cart)
//  })

// const removeToCart = (item,qty) => {
//   let newCart = cart
//   let index = newCart.indexOf(item)
//   newCart.push(index)  
//   setCart(newCart)
// }
// const clearToCart = (item,qty) => {

// }
