import Item from "../Item/Item"
import './ItemList.css'

const Itemlist = ({productos}) => {
  return (
    <div className="contenedorProductos">

      {productos.map(prod => <Item key={prod.id} {...prod} /> )}
      
    </div>
  )
}

export default Itemlist