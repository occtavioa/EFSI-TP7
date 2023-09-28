import { Button, List, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../CarritoContext"
import CardProductoAñadido from "../Componentes/CardProductoAñadido"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"
import axios from "axios";

function Carrito() {
    const { idProductosAñadidos, quitarIdProducto } = useContext(CarritoContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(r => r.data)
            .then(data => data.products)
            .then(products => {
                setProductos(products.filter(p => idProductosAñadidos.includes(p.id)))
            })
            .catch((e) => {
                console.log(e);
                setProductos([])
            })
    }, [idProductosAñadidos])

    return (
        <>
            <Stack flexDirection={"row"}>
                <List>
                    {
                        productos.map((p) =>
                            <CardProductoAñadido producto={p} quitarProducto={quitarIdProducto} key={p.id}></CardProductoAñadido>
                        )
                    }
                </List>
                <Typography alignSelf={"center"}>
                    $
                    {
                        productos.map((p) => p.price).reduce((accumulator, current) => accumulator+current, 0)
                    }
                </Typography>
            </Stack>
            <Button>
                <Link to={"/productos"}>
                    <AddIcon></AddIcon>
                    <Typography>Agregar producto</Typography>
                </Link>
            </Button>
        </>
    )
}

export default Carrito
