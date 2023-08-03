import { useEffect, useState } from 'react';
import CardProducto from '../Componentes/CardProducto';

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
                        pr = r.products[Math.floor(Math.random() * 29)]
                    } while (prs.includes(pr))
                    prs.push(pr);
                }
                setProductosRandom(prs)
            });
    }, [])

    return (
        <div>
            {
                productosRandom.map(pr =>
                    <div key={pr.id}>
                        <CardProducto producto={pr}></CardProducto>                        
                    </div>
                )
            }
        </div>
    );
}

export default Home;
