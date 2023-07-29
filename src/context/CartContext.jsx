import { useState, createContext } from "react"

export const CartContext = createContext({
    carrito:[],
    total: 0,
    cantidadTotal: 0
})

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0)


    console.log(carrito)

    const agregarProd = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente){
            setCarrito( prev => [...prev, {item, cantidad}]);
            setCantidadTotal( prev => prev + cantidad);
            setTotal( prev => prev + (item.precio * cantidad));
        }else{
            const cartActualizado = carrito.map( prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad:prod.cantidad + cantidad}
                } else{
                    return prod;
                }
            });
            setCarrito(cartActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }




    const eliminarProd = (id) => {
        const prodEliminado = carrito.find(prod => prod.item.id === id);
        const cartActualizado = carrito.filter( prod => prod.item.id !== id);

        setCarrito(cartActualizado);
        setCantidadTotal(prev => prev - prodEliminado.cantidad);
        setTotal(prev => prev - (prodEliminado.item.precio * prodEliminado.item.cantidad));
    }


    const vaciarCart = () =>{
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return(
        <CartContext.Provider value={{carrito, total, cantidadTotal, agregarProd, eliminarProd, vaciarCart}}>
            {children}
        </CartContext.Provider>
    )

}