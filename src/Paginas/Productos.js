import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardProducto from "../Componentes/CardProducto";
import GaleriaProductos from "../Componentes/GaleriaProductos";

function Productos() {
    const [categorias, setCategorias] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroBusqueda, setFiltroBusqueda] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(r => {
                setCategorias(r)
            })
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
                    <InputLabel id="categoria">Categoria</InputLabel>
                    <Select
                        labelId="categoria"
                        label="Categoria"
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

            <GaleriaProductos filtroBusqueda={filtroBusqueda} filtroCategoria={filtroCategoria}></GaleriaProductos>
        </div>
    )
}

export default Productos;
