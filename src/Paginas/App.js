import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <div>
          <a href="#">TP7</a>
          <div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"productos"}>Productos</Link>
              </li>
              <li>
                <Link to={"contacto"}>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
