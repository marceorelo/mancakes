
import Contexts from '../Context/Items'
import { useNavigate } from 'react-router-dom'
import {useContext, useState} from "react"
import ItemCount from "./ItemCount"
import CartContext  from '../Context/CartContext'
import ItemCart from './ItemCart'

const ItemDetail = ({data}) => {  
  console.log("itemdetail",data)
  const context = useContext(Contexts.cartContext)
 const [state, setState] = useState()
 console.log("STATE",state)
  let navigate = useNavigate();  
  function handleCheckout(e) {
      context.func([...context.value,{
          buyer: {
            name: "Test",
            phone: 12123,
            email: "test@test"
          },
          items:[{
            title: state.title,
            price: state.price
          }],
          total: state.price
        }])        
  
      //    context.func([...context.value, state])        
      navigate("/cart")
  }
  

                  return (
                       <>                 
                    <p>hola</p>
                    <h1>{state.title}</h1>
                      <img width="300" src={state.image}></img>
                      <article></article>
                      <h2>$ {state.price}.00</h2>
                  
                    <div>
                      <ItemCount />
                    </div>
                      <button onClick={handleCheckout} variant="outline-primary">CHECKOUT</button>
                      </> 
                      )
     
}
export default ItemDetail