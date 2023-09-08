import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { CarritoContext } from '../CarritoContext';

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
  function quitarProducto(id) {
    setIdProcutosAñadidos(
      [
        idProductosAñadidos.splice(idProductosAñadidos.indexOf(id), 1)
      ]
    )
  }

  return (
    <CarritoContext.Provider value={{idProductosAñadidos, añadirIdProducto, quitarProducto}}>
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
              <Link href="/">
                <Typography variant="inherit" component="div" sx={{ flexGrow: 1 }} color="white">
                  TP-7
                </Typography>
              </Link>
            </IconButton>
            <Link href='/productos' variant='inherit' marginRight={"1%"}>
              <Typography variant="button" component="div" sx={{ flexGrow: 1 }} color="white">
                Productos
              </Typography>
            </Link>
            <Link href='/contacto' variant='inherit'>
              <Typography variant="button" component="div" sx={{ flexGrow: 1 }} color="white">
                Contacto
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet></Outlet>
    </CarritoContext.Provider>
  );
}

export default App;
