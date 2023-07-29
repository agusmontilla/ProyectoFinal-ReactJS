import { useState } from "react"
import Button from 'react-bootstrap/Button';

const ItemCount = ({inicial, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    

    const aumentar = () => {
        if(contador < 1000000000) {
            setContador(contador + 1);
        }
    }

    const descontar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (

    <>
    <div className="d-flex justify-content-start">
        <Button onClick={descontar}> - </Button>{' '}
        <p> {contador} </p>
        <Button onClick={aumentar}> + </Button>{' '}
    </div>
    <Button variant="success" onClick={()=>funcionAgregar(contador)}>Agregar al carrito</Button>{' '}
    

    </>
    )
}

export default ItemCount