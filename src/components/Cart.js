import React, {useContext, useEffect, useState} from "react";
import Contexts from "../Context/Items";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const contexto = useContext(Contexts.cartContext)
    let acumulador = 0
    let acumuladorCarrito = 0
    const [acumuladorTotal, setAcumuladorTotal] = useState(0)
    let total = 0
    const [state, setState] = useState([{
        buyer:{
            name:"",
            phone: 12123,
            email: "test@test"
        },
        items: [{
            title: "",
            price: 0,
            image: "",
            cantidad: 0,
            subtotal: 0

        }],    
    total: 0
      }])
     useEffect(()=>{
        setState(contexto.value)        
      },[])
    
      const handleCheckout = ()=>{
        console.log(contexto.value)
      }
      const totalCarrito = () => {
        for (let i = 0; i < contexto.length; i++) {
            acumuladorCarrito = acumuladorCarrito + contexto.items[i].cantidad*contexto.items[i].price;
        }
       setAcumuladorTotal(acumuladorCarrito)
       console.log(acumuladorCarrito)
    }
    
 
  return (
        <>          
          <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Foto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contexto.value.map((value)=>{               
                    return (
                      
                        <tr>                                                    
                            <td>{value.items[0].title}</td>
                            <td><img width="100px" height="100px" src={value.items[0].image}></img></td>
                            <td>$ {value.items[0].price}.00</td>                          
                            <td>    {value.items[0].cantidad}    </td>
                            <td>$ {value.items[0].price * value.items[0].cantidad}.00 </td>                        
                            <td><button onClick=''>Eliminar</button></td>
                        </tr>
                   
                  )
                })}
            </tbody>
        </table>          
       
        <button onClick={handleCheckout} variant="outline-primary">CHECKOUT</button>
        </>
  )
}

