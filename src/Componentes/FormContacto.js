function FormContacto() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <label htmlFor="nombre">Nombre</label>
            <input type={"text"} id="nombre"/>
            <label htmlFor="apellido">Apellido</label>
            <input type={"text"} id="apellido"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <label htmlFor="mensaje">Tu mensaje</label>
            <textarea id="mensaje"></textarea>
            <button type="submit">Mandar</button>
        </form>
    )
}

export default FormContacto;
