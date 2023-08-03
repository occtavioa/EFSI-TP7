import { Card, CardActions, CardContent, CardMedia, Typography, Link } from "@mui/material";

function CardProducto({producto}) {
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
                <Link href={`/productos/${producto.id}`} underline="hover">Más información</Link>
            </CardActions>
        </Card>
    )
}

export default CardProducto;
