import { Card, CardActions, CardContent, CardMedia, Typography, Link, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CarritoContext } from "../CarritoContext";

function CardProducto({producto, añadido}) {
    const {añadirIdProducto} = useContext(CarritoContext)

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
                <Link href={`/productos/${producto.id}`} underline="hover" variant="button">Más información</Link>
                <Button disabled={añadido} onClick={() => {
                    añadirIdProducto(producto.id)
                }}>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
            </CardActions>
        </Card>
    )
}
    
export default CardProducto;
