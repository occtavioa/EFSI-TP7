import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../CarritoContext";
import StarIcon from '@mui/icons-material/Star';

function Producto() {
    const { id } = useParams();
    const { idProductosAñadidos, añadirIdProducto, quitarIdProducto } = useContext(CarritoContext)
    const [producto, setProducto] = useState();
    const [imagenSeleccionada, setImagenSeleccionada] = useState()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(r => r.data)
            .then(data => {
                setProducto(data)
            })
            .catch(e => {
                console.error(e);
            })
    }, [id])

    useEffect(() => {
        if (producto) {
            setImagenSeleccionada(producto.images[0])
        }
    }, [producto])

    return (
        <Stack flexDirection={"row"}>
            {
                producto ?
                    <>
                        <ImageList sx={{ width: "20%" }}>
                            {
                                producto.images.map((img, i) =>
                                    <ImageListItem key={i} onClick={() => {
                                        setImagenSeleccionada(img)
                                    }}
                                    >
                                        <img alt="" src={img}></img>
                                    </ImageListItem>
                                )
                            }
                        </ImageList>
                        <ImageListItem>
                            {
                                imagenSeleccionada ?
                                    <img alt={producto.description} src={imagenSeleccionada}></img> :
                                    <></>
                            }
                        </ImageListItem>
                        <Stack alignSelf={"center"}>
                            <Typography>
                                Nombre: {producto.title}
                            </Typography>
                            <Typography>
                                Precio: ${producto.price}
                            </Typography>
                            {
                                producto.discount ?
                                    <Typography>
                                        Descuento: {producto.discount}
                                    </Typography> :
                                    <Typography>
                                        Sin descuento
                                    </Typography>
                            }
                            <Typography>
                                {producto.rating}
                                {
                                    [...new Array(Math.round(producto.rating))].map((_, i) => <StarIcon key={i}></StarIcon>)
                                }
                            </Typography>
                            <Typography>
                                Descripción: {producto.description}
                            </Typography>
                            {
                                idProductosAñadidos.includes(parseInt(id)) ?
                                    <Button onClick={() => {
                                        quitarIdProducto(parseInt(id))
                                    }}>
                                        Quitar del carrito <RemoveShoppingCart />
                                    </Button> :
                                    <Button onClick={() => {
                                        añadirIdProducto(parseInt(id))
                                    }}>
                                        Agregar al carrito <AddShoppingCart />
                                    </Button>
                            }
                        </Stack>
                    </> :
                    <></>
            }
        </Stack>
    )
}

export default Producto
