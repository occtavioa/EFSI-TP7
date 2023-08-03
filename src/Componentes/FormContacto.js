function FormContacto() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <label htmlFor="nombre">Nombre</label>
            <input type={"text"} id="nombre" required/>

            <label htmlFor="apellido">Apellido</label>
            <input type={"text"} id="apellido" required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required/>

            <label htmlFor="mensaje">Tu mensaje</label>
            <textarea id="mensaje" required></textarea>

            <button type="submit">Mandar</button>
        </form>
    )
}

export default FormContacto;
