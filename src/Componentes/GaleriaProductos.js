import { useEffect, useState } from "react"
import CardProducto from "./CardProducto";
import ListaProductos from "./ListaProductos";

function GaleriaProductos({filtroBusqueda, filtroCategoria}) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(r => {
                setProductos(r.products);
            });
    }, [])

    return (
        <ListaProductos productos={productos.filter(p => 
            p.category.includes(filtroCategoria) &&
            p.title.toLowerCase().includes(filtroBusqueda.toLowerCase())
        )}></ListaProductos>
    )
}

export default GaleriaProductos;
