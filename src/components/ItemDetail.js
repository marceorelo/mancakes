
import Contexts from '../Context/Items'
import { useNavigate } from 'react-router-dom'
import {useContext, useState} from "react"
import ItemCount from "./ItemCount"
import CartContext  from '../Context/CartContext'
import ItemCart from './ItemCart'

const ItemDetail = ({data}) => {  
    console.log("itemdetail")
    const context = useContext(Contexts.cartContext)
   // const [cart, totalPrice] = useCartContext()
    const [cart, setCart] = useState()
    console.log(context.value)
    let navigate = useNavigate();  
      // context.func([...context.value, data])        
       // navigate("/cart")
 
      function addProduct (item, newQuantity)  {
    //    console.log('item:',item)
      
       const newCart = cart.filter(prod => prod.id !== item.id)
       // 
        newCart.push({...item, quantity:newQuantity})
        setCart(newCart)
        console.log('cart',cart)
        //

       // navigate("/cart")
      }
    

                    return (
                         <>                 
                                          
                      <p>hola</p>
                      <h1>{data.title}</h1>
                        <img width="300" src={data.image}></img>
                        <article></article>
                        <h2>$ {data.price}.00</h2>
                    
                      <div>
                        <ItemCount />
                      </div>
                        <button onClick={addProduct(data,2)} variant="outline-primary">CHECKOUT</button>
                        </> 
                        
                        )
       
}
//{addProduct(data,2)}
export default ItemDetail;