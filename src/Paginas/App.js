import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Outlet, Link } from 'react-router-dom';
import { CarritoContext } from '../CarritoContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [idProductosAñadidos, setIdProcutosAñadidos] = React.useState([])
  function añadirIdProducto(id) {
    setIdProcutosAñadidos(
      [
        id,
        ...idProductosAñadidos
      ]
    )
  }
  function quitarIdProducto(id) {
    setIdProcutosAñadidos(
      [
        idProductosAñadidos.splice(idProductosAñadidos.indexOf(id), 1)
      ]
    )
  }

  return (
    <CarritoContext.Provider value={{idProductosAñadidos, añadirIdProducto, quitarIdProducto}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to={"/"}>
                <Typography variant="inherit" sx={{ flexGrow: 1 }} color="white">
                  TP-7
                </Typography>
              </Link>
            </IconButton>
            <Link to={"productos"}>
              <Typography variant="button" sx={{ flexGrow: 1 }} color="white">
                Productos
              </Typography>
            </Link>
            <Link to={"contacto"}>
              <Typography variant="button" sx={{ flexGrow: 1 }} color="white">
                Contacto
              </Typography>
            </Link>
              <Link to={"carrito"}>
                <ShoppingCartIcon></ShoppingCartIcon>
              </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet></Outlet>
    </CarritoContext.Provider>
  );
}

export default App;
