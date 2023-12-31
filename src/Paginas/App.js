import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Outlet, Link } from 'react-router-dom';
import { CarritoContext } from '../CarritoContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  const [idProductosAñadidos, setProductosAñadidos] = useState(localStorage.getItem("idProductosAñadidos") === null ? [] : JSON.parse(localStorage.getItem("idProductosAñadidos")))

  function añadirIdProducto(p) {
    setProductosAñadidos(idProductosAñadidos.toSpliced(0, 0, p))
  }
  function quitarIdProducto(p) {
    setProductosAñadidos(idProductosAñadidos.toSpliced(idProductosAñadidos.indexOf(p), 1))
  }

  useEffect(() => {
    localStorage.setItem("idProductosAñadidos", JSON.stringify(idProductosAñadidos))
  }, [idProductosAñadidos])
  
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
            <Button>
              <Link to={"productos"}>
                <Typography variant="button" sx={{ flexGrow: 1 }} color="white">
                  Productos
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link to={"contacto"}>
                <Typography variant="button" sx={{ flexGrow: 1 }} color="white">
                  Contacto
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link to={"carrito"}>
                <ShoppingCartIcon></ShoppingCartIcon>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Outlet></Outlet>
    </CarritoContext.Provider>
  );
}

export default App;
