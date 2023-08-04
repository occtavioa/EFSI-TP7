import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardProducto from "../Componentes/CardProducto";

function Productos() {
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroBusqueda, setFiltroBusqueda] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(r => {
                setProductos(r.products);
            });
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(r => {
                setCategorias(r)
            })
    }, [])

    return (
        <div style={{display:"flex"}}>
            <div>
                <TextField label="Buscar" variant="standard" onChange={e => {
                    setFiltroBusqueda(e.target.value)
                }}></TextField>
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
            <div style={{flexWrap: "wrap", display:"flex", flex: 1}}>
                {
                    productos.filter(
                        p => p.category.includes(filtroCategoria) &&
                            p.title.toLowerCase().includes(filtroBusqueda.toLowerCase())
                    ).map(p =>
                        <div key={p.id}>
                            <CardProducto producto={p}></CardProducto>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Productos;
