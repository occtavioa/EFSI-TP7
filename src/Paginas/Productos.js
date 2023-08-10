import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ListaProductos from "../Componentes/ListaProductos";

function Productos() {
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroBusqueda, setFiltroBusqueda] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(r => {
                setCategorias(r)
            })
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(r => {
                setProductos(r.products);
            });
    }, [])

    return (
        <div style={{display:"flex"}}>
            <div>
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
                    >
                        <MenuItem value={""} >Todas</MenuItem>
                        {
                            categorias.map((c, i) =>
                                <MenuItem key={i} value={c}>{c}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </div>

            <ListaProductos productos={productos.filter(p => 
                p.category.includes(filtroCategoria) &&
                p.title.toLowerCase().includes(filtroBusqueda.toLowerCase())
                )}
            >
            </ListaProductos>
        </div>
    )
}

export default Productos;
