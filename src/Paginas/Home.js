import { useEffect, useState } from 'react';
import ListaProductos from '../Componentes/ListaProductos';

function Home() {
    const [productosRandom, setProductosRandom] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((r) => {
                let prs = [];
                for (let i = 0; i < 6; i++) {
                    let pr;
                    do {
                        pr = r.products[Math.floor(Math.random() * r.products.length-1)]
                    } while (prs.includes(pr))
                    prs.push(pr);
                }
                setProductosRandom(prs)
            });
    }, [])

    return (
        <>
            {
                productosRandom &&
                    <ListaProductos productos={productosRandom}></ListaProductos>
            }
        </>
    );
}

export default Home;
