import CardProducto from "./CardProducto"

function ListaProductos({productos}) {
    return (
        <div style={{flexWrap: "wrap", display:"flex", flex: 1, justifyContent: "center", }}>
            {
                productos.map(pr =>
                    pr &&
                        <div key={pr.id} style={{margin: "1%"}}>
                            <CardProducto producto={pr}></CardProducto>               
                        </div>
                )
            }
        </div>
    )
}

export default ListaProductos
