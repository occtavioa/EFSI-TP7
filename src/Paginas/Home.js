import axios from 'axios';
import { useEffect, useState } from 'react';
import ListaProductos from '../Componentes/ListaProductos';

function Home() {
    const [productosRandom, setProductosRandom] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => res.data)
            .then(data => data.products)
            .then(products => {
                let prs = [];
                for (let i = 0; i < 6; i++) {
                    let pr;
                    do {
                        pr = products[Math.floor(Math.random() * products.length-1)]
                    } while (prs.includes(pr))
                    prs.push(pr);
                }
                setProductosRandom(prs)
            });
    }, [])

    return (
        <>
            <ListaProductos productos={productosRandom} ></ListaProductos>
        </>
    );
}

export default Home;
