import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CarritoContext } from "../CarritoContext";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function CardProducto({producto, añadido}) {
    const {añadirIdProducto, quitarIdProducto} = useContext(CarritoContext)

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={producto.thumbnail}
                title={producto.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {producto.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`productos/${producto.id}`}>
                    <Typography variant="button">
                        Más información
                    </Typography>
                </Link>
                <Button disabled={añadido} onClick={() => {
                    añadirIdProducto(producto.id)
                }}>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
                {
                    añadido ?
                        <Button onClick={() => {
                            quitarIdProducto(producto.id)
                        }}>
                            <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
                        </Button> :
                        <></>
                }
            </CardActions>
        </Card>
    )
}

export default CardProducto;
