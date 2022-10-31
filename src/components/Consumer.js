import React, {useContext} from "react";
import Contexts from "../Context/Items";

export default function Consumer() {  
    const contextValue = useContext(Contexts.cartContext)
    console.log(contextValue)
    return (
        <>
        <div>Consumer</div>
        <h3>{contextValue}</h3>
        </>
    )
}
