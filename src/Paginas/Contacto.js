import { Typography } from "@mui/material";
import FormContacto from "../Componentes/FormContacto";

function Contacto() {
    return (
        <div>
            <Typography component="div" sx={{ flexGrow: 1 }} variant="h3">
                Contactanos!
            </Typography>
            <FormContacto></FormContacto>
        </div>
    )
}

export default Contacto;
