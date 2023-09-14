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
            .then(r => setCategorias(r.data))
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProductos(res.data.products)
            })
            .catch(e => {
                console.error(e);
                setProductos([])
            })
    }, [])

    return (
        <Stack direction={"row"}>
            <Stack>
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

            <ListaProductos productos={productos.filter(p => 
                    p.category.includes(filtroCategoria) &&
                    p.title.toLowerCase().includes(filtroBusqueda.toLowerCase())
                )}
            >
            </ListaProductos>
        </Stack>
    )
}

export default Productos;
