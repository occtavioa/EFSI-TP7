import { useParams } from "react-router-dom";

function Producto() {
    const {id} = useParams();

    return (
        <div>
            Producto {id}
        </div>
    )
}

export default Producto
