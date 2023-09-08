import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Paginas/App';
import Home from './Paginas/Home';
import Productos from './Paginas/Productos';
import Producto from './Paginas/Producto';
import Contacto from './Paginas/Contacto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Carrito from './Paginas/Carrito';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "productos",
        children: [
          {
            index: true,
            element: <Productos></Productos>
          },
          {
            path: ":id",
            element: <Producto></Producto>
          }
        ]
      },
      {
        path: "contacto",
        element: <Contacto></Contacto>,
      },
      {
        path: "carrito",
        element: <Carrito></Carrito>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
