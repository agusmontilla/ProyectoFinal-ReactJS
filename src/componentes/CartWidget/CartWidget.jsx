import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)
    const imgCarrito="https://cdn-icons-png.flaticon.com/512/107/107831.png"



  return (
    <div>
      <Link to="/cart">
        <img className="imgCarro"src={imgCarrito} alt="Carrito" />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget