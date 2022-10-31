const ItemCart = ({product}) => {
   // const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.name} />
            <div>
                <p>Titulo: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u: {product.price}</p>
                <p>Subtotal: {product.quantity} * {product.price}</p>
                <button onClick=''>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart;
//{() => removeProduct(product.id)}