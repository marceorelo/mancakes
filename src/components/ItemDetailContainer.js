import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import {useState, useEffect, useContext} from "react"
import { filterCollection } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import Abstract from './Abstract'
import Contexts from "../Context/Items"
import ItemCount from "./ItemCount"

const ItemDetailContainer = () => {
    const context = useContext(Contexts.cartContext)

    const {id} = useParams()
    let navigate = useNavigate();
    const [state, setState] = useState({})
    const [count, setCount] = useState(0);
    let stock = 15;
    let acumulador = 0
console.log(id)
useEffect(()=>{
    console.log(id)
    const res = filterCollection("almacen",["id","==",id])
    res.then((res)=>{
        setState(res.docs.map((value)=>value.data())[0])
      })
    return () => {
      console.log(state);
    }
  }, [])

  function handleCheckout(e) {
    context.func([...context.value,{
      buyer: {
        name: "Test",
        phone: 12123,
        email: "test@test",
       
      },
      items:[{
        title: state.title,
        price: state.price,
        image: state.image, 
        cantidad: count,
        subtotal: state.price * count
      }],
  //    total: 0
    }])  
    navigate("/cart")
}


function handleClickMas () {
  if (count < stock) {
  setCount(count + 1)
  }
}
function handleClickMenos () {
  if (count > 0) {
  setCount(count - 1)
  }
}

    return (
          <>  
        <h1>{state.title}</h1>
          <img width="300" src={state.image}></img>
          <article></article>
          <h2>$ {state.price}.00</h2>
      
          <div>
      <button onClick={handleClickMas}> + </button>  {count}  <button onClick={handleClickMenos}> - </button>
    </div>

          <button onClick={handleCheckout} variant="outline-primary">CHECKOUT</button>
          </>
    )
  }
export default ItemDetailContainer;