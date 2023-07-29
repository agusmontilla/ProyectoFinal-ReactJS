const misProductos =[
    { id:1, nombre:"Fifa 23",             imagen:"./imagenes/fifa23.jpg", precio:20000, idCat:"1"},
    { id:2, nombre:"NBA 2k23",            imagen:"./imagenes/nba.jpg", precio:19000, idCat:"1"},
    { id:3, nombre:"God of war Ragnarok", imagen:"./imagenes/godofwar.webp", precio:23000, idCat:"3"},
    { id:4, nombre:"The las of us II",    imagen:"./imagenes/thelastofus.webp", precio:25000, idCat:"3"},
    { id:5, nombre:"Until Dawn",          imagen:"./imagenes/untildawn.jpg", precio:14000, idCat:"4"},
    { id:6, nombre:"Dirt 4",              imagen:"./imagenes/dirt4.jpg", precio:15000, idCat:"2"},
    { id:7, nombre:"Gran turismo 7",      imagen:"./imagenes/granturismo.jpg", precio:17000, idCat:"2"},
    { id:8, nombre:"Resident Evil 4",     imagen:"./imagenes/residentevil.webp", precio:24000, idCat:"4"}
]

export const getProductos = ()=> {
    return new Promise((resolve)=> {
        setTimeout( ()=>{
            resolve(misProductos)
        }, 100)
    })
}


export const getUnProducto = (id)=>{
        return new Promise(resolve => {
            setTimeout( () =>{
                const producto = misProductos.find(prod=> prod.id === +id);
                resolve(producto)
            }, 100)
        })
}


export const getCategoriaProductos = (idCategoria)=>{

    return new Promise(resolve=>{
        setTimeout( () =>{
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        },100)
    })
}