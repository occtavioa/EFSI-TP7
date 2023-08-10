import { FormControl, TextareaAutosize } from "@mui/base";
import { FormLabel, TextField } from "@mui/material";

function FormContacto() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <div style={{display:"flex"}}>
                <FormControl>
                    <TextField label="Nombre" required></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="Apellido" required></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="Email" required></TextField>
                </FormControl>
            </div>

            <div style={{display: "flex"}}>
                <FormControl>
                    <FormLabel htmlFor="mensaje">Tu mensaje</FormLabel>
                    <TextareaAutosize id="mensaje" required></TextareaAutosize>
                </FormControl>
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default FormContacto;
