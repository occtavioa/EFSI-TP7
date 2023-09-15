import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function CardProducto({producto, añadirProducto, quitarProducto, añadido}) {
    return (
        <Card sx={{ maxWidth: 345, margin: "1%" }}>
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
                <Link to={`/productos/${producto.id}`}>
                    <Typography variant="button">
                        Más información
                    </Typography>
                </Link>
                <Button disabled={añadido} onClick={() => {
                    añadirProducto(producto.id)
                }}>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
                {
                    añadido ?
                        <Button onClick={() => {
                            quitarProducto(producto.id)
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
