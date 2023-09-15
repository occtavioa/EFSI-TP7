import { AddShoppingCart, Image, RemoveShoppingCart } from "@mui/icons-material";
import { Button, ImageList, ImageListItem } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../CarritoContext";

function Producto() {
    const {id} = useParams();
    const {idProductosAñadidos, añadirIdProducto, quitarIdProducto} = useContext(CarritoContext)
    const [producto, setProducto] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(r => {
                setProducto(r)
            });
    }, [])

    return (
        <>
            {
                producto ?
                    <Stack direction={"row"}>
                        <ImageList cols={1} >
                            {
                                producto.images.map((img, i) =>
                                    <ImageListItem key={i} >
                                        <img alt="" src={img}></img>
                                    </ImageListItem>
                                )
                            }
                        </ImageList>
                        <Stack>
                            <Image >
                                <img alt={producto.description} src={producto.thumbnail}></img>
                            </Image>
                            {
                                idProductosAñadidos.includes(parseInt(id)) ?
                                    <Button onClick={() => {
                                        quitarIdProducto(parseInt(id))
                                    }}>
                                        Quitar del carrito <RemoveShoppingCart/>
                                    </Button> :
                                    <Button onClick={() => {
                                        añadirIdProducto(parseInt(id))
                                    }}>
                                        Agregar al carrito <AddShoppingCart/>
                                    </Button>
                            }
                        </Stack>
                    </Stack> :
                    <></>
            }
        </>
    )
}

export default Producto
