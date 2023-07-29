import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
import './ItemDetailContainer.css'





const ItemDetailContainer = () => {
    const [producto, setProducto]=useState(null)
    const {idItem} =useParams()


      useEffect(()=>{

        const newDoc = doc(db, "Inventario", idItem);

          getDoc(newDoc)
            .then(res=>{
              const data = res.data();
              const nuevoProd = {id: res.id, ...data}
              setProducto(nuevoProd)
            })
            .catch(error=>console.log(error))
      }, [idItem])




  //  useEffect(()=>{
  //      getUnProducto(idItem)
  //          .then(res => setProducto(res))
  //  }, [idItem])



  return (
    <div className="fondoDetail">
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer