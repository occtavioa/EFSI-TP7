import { IconButton, List, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../CarritoContext"
import CardProductoAñadido from "../Componentes/CardProductoAñadido"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"

function Carrito() {
    const {idProductosAñadidos, quitarIdProducto} = useContext(CarritoContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(r => r.json())
            .then(r => r.products)
            .then(products => {setProductos(products.filter(p => idProductosAñadidos.includes(p.id)))})
            .catch((e) => {
                console.log(e);
                setProductos([])
            })
    }, [idProductosAñadidos])
    
    return (
        <Stack>
            <List>
                {
                    productos.map((p) =>
                        <CardProductoAñadido producto={p} quitarProducto={quitarIdProducto} key={p.id}></CardProductoAñadido>
                    )
                }
            </List>
            <IconButton>
                <Link to={"/productos"}>
                    <AddIcon></AddIcon>
                    <Typography>Agregar producto</Typography>
                </Link>
            </IconButton>
        </Stack>
    )
}

export default Carrito
