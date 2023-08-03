import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Producto() {
    const {id} = useParams();
    const [producto, setProducto] = useState(undefined);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(r => {
                setProducto(r)
            });
    }, [])

    return (
        producto &&
        <div>
            {producto.title}
            {
                producto &&
                    producto.images.map((img, i) => 
                        <img key={i} src={img}></img>
                    )
            }
        </div>
    )
}

export default Producto
