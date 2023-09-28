import { Button, FormControl, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ListaProductos from "../Componentes/ListaProductos";

function Productos() {
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroBusqueda, setFiltroBusqueda] = useState("");

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(r => r.data)
            .then(data => {
                setCategorias(data)
            })
            .catch(e => {
                console.error(e)
            })
        axios.get("https://dummyjson.com/products")
            .then(r => r.data)
            .then(data => data.products)
            .then(products => {
                setProductos(products)
            })
            .catch(e => {
                console.error(e)
            })
    }, [])
    
    return (
        <Stack flexDirection={"row"}>
            <Stack alignSelf={"flex-start"}>
                <FormControl fullWidth>
                    <TextField label="Buscar" variant="standard" onChange={e => {
                        setFiltroBusqueda(e.target.value)
                    }}></TextField>
                </FormControl>
                <FormControl fullWidth>
                    <Select
                        onChange={e => {
                            setFiltroCategoria(e.target.value)
                        }}
                        defaultValue={""}
                    >
                        <MenuItem value={""} >Todas</MenuItem>
                        {
                            categorias.map((c, i) =>
                                <MenuItem key={i} value={c}>{c}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
                <Button onClick={async () => {
                    axios.get(categorias.includes(filtroCategoria) ? `https://dummyjson.com/products/category/${filtroCategoria}` : "https://dummyjson.com/products")
                        .then(r => r.data)
                        .then(data => data.products)
                        .then(productsC => {
                            axios.get(`https://dummyjson.com/products/search?q=${filtroBusqueda}`)
                                .then(r => r.data)
                                .then(data => data.products)
                                .then(productsB => {
                                    console.log(productsB);
                                    setProductos(productsC.filter(p => productsB.map(p => p.id).includes(p.id)))
                                })
                                .catch(e => {
                                    console.error(e);
                                })
                        })
                        .catch(e => {
                            console.error(e)
                        })
                }}>
                    Filtrar
                </Button>
            </Stack>

            <Stack alignSelf={"flex-end"}>
                {
                    productos.length > 0 ?
                        <ListaProductos productos={productos}
                        >
                        </ListaProductos> :
                        <Typography>
                            No se encontraron productos
                        </Typography>
                }
            </Stack>
        </Stack>
    )
}

export default Productos;
