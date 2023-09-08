import { ImageList, ImageListItem } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../CarritoContext"

function Carrito() {
    const {idProductosAñadidos} = useContext(CarritoContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {

    }, [])
    
    return (
        <>
            <ImageList cols={1}>
                {
                    productos.map(p =>
                        <img src={`${p.thumbnail}`}></img>    
                    )
                }
            </ImageList>            

            <img></img>
        </>
    )
}

export default Carrito
