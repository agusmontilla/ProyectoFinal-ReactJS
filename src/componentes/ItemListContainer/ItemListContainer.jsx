import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query }  from "firebase/firestore";
import { db } from '../../services/config';


const ItemListContainer = (props) => {
  const [productos, setProductos]= useState([])
  const [loading, setLoading] = useState(true);

  const {idCategoria}= useParams()

      useEffect(()=>{
        const misProds = idCategoria ? query(collection(db, "Inventario"), where("idCat", "==", idCategoria)) : collection(db, "Inventario")

        getDocs(misProds)
            .then((res) =>{
              const nuevosProds = res.docs.map((doc) =>{
                const data = doc.data()
                return {id: doc.id, ...data}
              })
              setProductos(nuevosProds)
              setLoading(false);
            })
            .catch((error)=>{
              console.log("Error al obtener los productos:", error);
              setLoading(false);
            })   

      },[idCategoria])



  return (
    <div className="colorFondo">

    <h2 className='texto'>{props.greeting}</h2>
    {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No se encontraron productos para esta categoría</p>
      )}
    
    </div>
  )
}

export default ItemListContainer