import { setIndexConfiguration } from 'firebase/firestore'
import React, {useContext, useState} from 'react'
import Contexts from './Items'


export default function CartContext({children}) {
 
const [cart, setCart] = useState([])
console.log("cart:", cart)

//const totalPrice = () => {
//  return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    
    //(acumulador, productoActual) => acumulador + productoActual.quantity, 0)
//}

//const totalProducts = () => {
//  cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0) 
//}

//const clearCart = () => setCart([])

//const isInCart = (id) => cart.find(product => product.id === id) ? true : false

//const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))



console.log(cart)
  return (
    <Contexts.cartContext.Provider value={{value:cart,func:setCart}}>
       {children}
    </Contexts.cartContext.Provider>
  )
}