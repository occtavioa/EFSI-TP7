import { Stack } from "@mui/system"
import { useContext } from "react"
import { CarritoContext } from "../CarritoContext"
import CardProducto from "./CardProducto"

function ListaProductos({productos}) {
    const {idProductosAñadidos, añadirIdProducto, quitarIdProducto} = useContext(CarritoContext)
    
    return (
        <Stack flexDirection="row" flexWrap={"wrap"} justifyContent={"space-evenly"}>
           {
                productos.map(pr =>
                    pr &&
                        <CardProducto producto={pr} añadido={idProductosAñadidos.includes(pr.id)} añadirIdProducto={añadirIdProducto} quitarIdProducto={quitarIdProducto} key={pr.id}></CardProducto>               
                )
            }
        </Stack>
    )
}

export default ListaProductos
