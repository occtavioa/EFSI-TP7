import CardProducto from "./CardProducto"

function ListaProductos({productos}) {
    return (
        <div style={{flexWrap: "wrap", display:"flex", flex: 1}}>
            {
                productos.map(pr =>
                    pr ?
                        <div key={pr.id}>
                            <CardProducto producto={pr}></CardProducto>               
                        </div> :
                        <></>
                )
            }
        </div>
    )
}

export default ListaProductos
