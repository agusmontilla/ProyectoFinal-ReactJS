import { useContext}  from "react";
import {CartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Button from 'react-bootstrap/Button';


const Cart = () => {

    const {carrito, vaciarCart, total, cantidadTotal} = useContext(CartContext)

    if(cantidadTotal === 0){
        return(
            <div className="mt-3 ms-5">
                <h2> Su carrito esta vacio </h2>
                <Link to="/"> 
                <Button>Ver productos</Button> 
                </Link>
            </div>
        )
    }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" key="index">
        {carrito.map(prod => <CartItem key={prod.id} {...prod} /> )}
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <Button variant="danger" onClick={() => vaciarCart()}> Vaciar carrito</Button>
        <Link to="/checkout" >
        <Button variant="success">Finalizar compra</Button> 
        </Link>
    </div>
  )
}

export default Cart