import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import Button from 'react-bootstrap/Button';


export const ItemDetail = ({id, nombre, precio, imagen, textoId}) => {

  const [agregarCant, setAgregarCant] = useState(0)


  const {agregarProd} = useContext(CartContext);



  const manejadorCant = (cantidad) => {
    setAgregarCant(cantidad)
    console.log("productos agregados: " + cantidad )
    const item = {id, nombre, precio};
    agregarProd(item, cantidad)
  }


  return (
    <div className="d-flex flex-column justify-content-center align-items-center" >
      <Card border="dark" style={{ width: '35rem'}}>
    <div className='d-flex justify-content-center'>
        <div>
          <Card.Img className="imgDetail" variant="top" src={imagen} />
        </div>
        
        <div>
          <Card.Body >
            <Card.Title className='text-center'>{nombre}</Card.Title>
          <Card.Text className='text-center'>
          ${precio}
            </Card.Text>
          <p>{textoId}</p>
      </Card.Body>
      </div>
  </div>
    </Card> 
   
    {
      agregarCant > 0 ? (<> <Link to="/"> <Button variant="primary">Seguir Comprando</Button></Link> <br /> <Link to="/cart"> <Button variant="secondary">Terminar compra</Button> </Link> </>   ) : (<ItemCount inicial={1}  funcionAgregar={manejadorCant}/>)
    } 
    </div>
  )
}

export default ItemDetail 
 
    
   // <h3>{nombre}</h3>
     //   <h3>${precio}</h3>
       // <h3>{id}</h3>
       // <p>Lorem ipsum aadolor sit amet, consectetur adipisicing elit. Veritatis atque temporibus eos. Soluta est error sint magnam, voluptatum, vitae, non totam iure dolor fugiat nostrum a adipisci illum porro aliquid.</p>
       // <img src={imagen} alt={nombre} />