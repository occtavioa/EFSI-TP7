import { RemoveShoppingCart } from "@mui/icons-material"
import { Avatar, ListItem, ListItemAvatar, ListItemButton, Typography } from "@mui/material"

function CardProductoAñadido({producto, quitarProducto}) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={producto.thumbnail}></Avatar>
            </ListItemAvatar>
            <Typography>{producto.description}</Typography>
            <ListItemButton onClick={() => {
                quitarProducto(producto.id)
            }}
            >
                <RemoveShoppingCart></RemoveShoppingCart>
            </ListItemButton>
            <Typography>
                $ {producto.price}
            </Typography>
        </ListItem>
    )
}

export default CardProductoAñadido
