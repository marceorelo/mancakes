
import '../styles/list.css';
import '../style.css';
import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"
import { filterCollection } from "../utils/firebase"

const ItemListContainer = () => {
   
    const {id} = useParams();
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
        const res = filterCollection("almacen",["categoriaId","==",id])
        res.then((res)=>{
            setState(res.docs.map((value)=>value.data()));
            setLoading(false)
        })
      },[])

    return(
        <>
            <div className='grid'>
                {state.map((item)=>{
                    return (
                        <>
                        {loading && <h1>LOADING</h1>}   
                        <div class="card">
                            {console.log(item.id)}
                            <img src={item.image} key={item.id} className="card__image" alt={item.title} />
                            <div className="card__info">
                            <h4 className="card__title"><NavLink to={`/items/${item.id}`} key={item.id}>{item.title}</NavLink></h4>
                            <p>$ {item.price}</p>                            
                            </div>
                         </div> 
                        </>
                    )
                })}
            </div>
            </>
    )
}


export default ItemListContainer;