import { FormControl, TextareaAutosize } from "@mui/base";
import { Button, FormGroup, FormLabel, Stack, TextField } from "@mui/material";

function FormContacto() {
    return (
        <FormGroup onSubmit={(e) => {
            e.preventDefault()
        }}>
            <Stack direction={"row"}>
                <FormControl>
                    <TextField label="Nombre" required></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="Apellido" required></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="Email" required></TextField>
                </FormControl>
            </Stack>

            <Stack direction={"row"}>
                <FormControl>
                    <FormLabel htmlFor="mensaje">Tu mensaje</FormLabel>
                    <TextareaAutosize id="mensaje" required></TextareaAutosize>
                </FormControl>
                <Button type="submit">Enviar</Button>
            </Stack>
        </FormGroup>
    )
}

export default FormContacto;
