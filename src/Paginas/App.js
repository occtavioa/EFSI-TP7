import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
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
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TP-7
            </Typography>
            <Button color="inherit">
              <Link href='/productos'>Productos</Link>
            </Button>
            <Button color="inherit">
              <Link href='/contacto'>Contacto</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
