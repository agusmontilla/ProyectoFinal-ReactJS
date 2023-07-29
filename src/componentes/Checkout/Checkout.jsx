import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import './Checkout.css'

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCart, total, cantidadTotal} =useContext(CartContext)


    const manejador = (event) => {

        event.preventDefault();

    
    if(!nombre || !telefono || !email || !confirmEmail){
        setError("Complete todos los datos");
        return;
    }

    if(email != confirmEmail){
        setError("Los emails no coinciden");
        return;
    }

    const orden= {
        items: carrito.map(prod =>({
            id: prod.item.nombre,
            nombre: prod.item.nombre,
            cantidad: prod.cantidad
        })),
        total: total,
        fecha: new Date(),
        nombre, 
        telefono,
        email
    };

    addDoc(collection(db, "compras"), orden)
        .then(docRef=>{
            setOrdenId(docRef.id);
            vaciarCart();
        })
        .catch(error=>{
            console.log("errooooor", error)
            setError("Se produjo un error al crear la orden")
        })

    }   



  return (
    <div>


        <form className="marginForm" onSubmit={manejador}>
            {
                carrito.map(prod =>(
                    <div key={prod.item.id}>
                        <p>{prod.item.nombre} x {prod.cantidad}</p>
                        <p>Precio unitario: ${prod.item.precio}</p>
                        <hr />
                        
                    </div>
                ))

                
            }
            {
            <div>
                <p>TOTAL: ${total}</p>
            </div>
            }

            <div>
                <div className="form-group">
                    <label htmlFor=""> Nombre: </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono: </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Confirmar email: </label>
                    <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }
                
                <Button  type="submit">Enviar datos</Button>
                

            </div>
        </form>
        {
        ordenId &&(
            <strong className="marginForm">Gracias por su compra!, su numero de orden es {ordenId}</strong>

            )
        }            
                
    </div>
)
}

export default Checkout