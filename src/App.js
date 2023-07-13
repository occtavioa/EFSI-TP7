import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [productosRandom, setProductosRandom] = useState([]); 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((r) => {
      console.log("1");
      console.log(r);
      console.log(r.products);
      for (let i = 0; i < 6; i++) {
        let pr;
        do {
          pr = r.products[Math.floor(Math.random()*29)]
        } while(productosRandom.includes(pr))
        setProductosRandom(productosRandom.toSpliced(0,0,pr))
      }
      console.log("2");
    });
  }, [])

  useEffect(() => {
    console.log(productosRandom);
  }, [productosRandom])

  return (
    <div className="App">
      <div className='carousel slide'>
        <div className='carousel-inner'>
          {/* {productosRandom.map(pr => 
            <div key={pr.id} className='carousel-item'>
              <img src={pr.images[0]}></img>
            </div>)} */}
        </div>
      </div>
    </div>
  );
}

export default App;
