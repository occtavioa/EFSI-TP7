import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {productosRandom.map((pr, i) =>
                    <div key={pr.id} className={i === 0 ? "carousel-item active" : "carousel-item"}>
                        <img className='class="d-block w-100' src={pr.thumbnail} alt={pr.title}></img>
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Home;
