import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
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
        axios.get('https://dummyjson.com/products')
            .then(r => r.data)
            .then(data => data.products)
            .then(products => {
                setProductos(products)
            })
            .catch(e => {
                console.error(e);
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
                        value={""}
                    >
                        <MenuItem value={""} >Todas</MenuItem>
                        {
                            categorias.map((c, i) =>
                                <MenuItem key={i} value={c}>{c}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </Stack>

            <Stack alignSelf={"flex-end"}>
                <ListaProductos productos={productos.filter(p => 
                        p.category.includes(filtroCategoria) &&
                        p.title.toLowerCase().includes(filtroBusqueda.toLowerCase())
                    )}
                >
                </ListaProductos>
            </Stack>
        </Stack>
    )
}

export default Productos;
