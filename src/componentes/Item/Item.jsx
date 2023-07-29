import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div className='marginCards'>
    <Card border="dark" bg='light' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className='text-center'>{nombre}</Card.Title>
        <Card.Text className='text-center'>
          ${precio}
        </Card.Text>
        <Link to={`/item/${id}`} >
          <Button className="btnMargin " variant="dark">Ver Detalles</Button>{' '}
        </Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Item






