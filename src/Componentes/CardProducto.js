import { Link } from "react-router-dom";

function CardProducto({producto}) {
    return (
        <div>
            {producto.title}
            <Link to={`/productos/${producto.id}`}>
                <img src={producto.thumbnail} alt={producto.description}></img>
            </Link>
        </div>
    )
}

export default CardProducto;
