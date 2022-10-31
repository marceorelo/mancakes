import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import {useState, useEffect, useContext} from "react"
import { filterCollection } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import Abstract from './Abstract'
import Contexts from "../Context/Items"


const ItemDetailContainer = ({items}) => {
    const context = useContext(Contexts.cartContext)

    const {id} = useParams()
    let navigate = useNavigate();
    const [state, setState] = useState({items})

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


 console.log("itemdetailcontainer")
 console.log(state) 
    return (
          <>  
          <ItemDetail data={state} />
          </>
    )
  }
export default ItemDetailContainer;