import { useContext } from "react"
import { CarritoContext } from "../CarritoContext"
import CardProducto from "./CardProducto"

function ListaProductos({productos}) {
    const {idProductosAñadidos} = useContext(CarritoContext)
    console.log(idProductosAñadidos);
    
    return (
        <div style={{flexWrap: "wrap", display:"flex", flex: 1, justifyContent: "center", }}>
            {
                productos.map(pr =>
                    pr &&
                        <div key={pr.id} style={{margin: "1%"}}>
                            <CardProducto producto={pr} añadido={idProductosAñadidos.includes(pr.id)}></CardProducto>               
                        </div>
                )
            }
        </div>
    )
}

export default ListaProductos
