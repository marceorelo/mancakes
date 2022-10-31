import carrito from "./img/carrito.png"
import { useCartContext } from "../Context/CartContext";
function CartWidget()  {
  //const {totalProducts} = useCartContext();
    return (
      <>
        <img src={carrito} alt="Carrito" width="35" height="35" />       
        <p>
          {//totalProducts() || '' 
          }
        </p>    
      </>
    );
  }

  export default CartWidget;