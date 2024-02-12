const Agenda=({name,mail, phonenumber})=>{
    return(
        <li>
        <a>Nombre cliente: {name}</a>
        <ul>
            <a>Correo: {mail}</a>
        </ul>
        <ul>
            <a>Numero de telefono: {phonenumber}</a>
        </ul>
        </li>
    )

}

export default Agenda