import React, {useContext, useEffect, useState} from "react";
import Contexts from "../Context/Items";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const contexto = useContext(Contexts.cartContext)
    const {cart, totalPrice} = useContext(Contexts.cartContext)
    const [state, setState] = useState()
     console.log(state)
        
     useEffect(()=>{
        setState(contexto.value)
        console.log(contexto.value);
      },[])
    
      const handleCheckout = ()=>{
        console.log(contexto.value)
   //     addSingleDoc(contexto.value)
      }

  return (
        <>
          
          <table>
            <thead>
                <tr>
                    <th>email</th>
                    <th>Producto</th>
                    <th>Foto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {contexto.value.map((value)=>{
                    return (
                        <tr>   
                            <td>{value.buyer.email}</td>                        
                            <td>{value.items[0].title}</td>
                            <td><img width="100px" height="100px" src={value.items[0].image}></img></td>
                            <td>$ {value.items[0].price}.00</td>
                            <td>cantidad</td>
                            <td>$ {value.total}.00</td>
                          
                           
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button onClick={handleCheckout} variant="outline-primary">CHECKOUT</button>
        </>
  )
}

