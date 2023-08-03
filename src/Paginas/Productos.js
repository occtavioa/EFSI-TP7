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
        <div>
            Productos
            <select onChange={e => {
                setFiltroCategoria(e.target.value)
            }}>
                <option value={""}>Todas</option>
                {
                    categorias.map((c, i) =>
                        <option key={i} value={c}>{c}</option>
                    )
                }
            </select>
            <input type={"text"} placeholder="Buscar" onChange={e => {
                setFiltroBusqueda(e.target.value)
            }}></input>
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
    )
}

export default Productos;
