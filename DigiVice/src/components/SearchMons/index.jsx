import React, { useState } from "react"
import { useForm } from "../../Hooks/useForm"
import Swal from "sweetalert2"

const SearchMons = ({ Dmons, setMons }) => {
    const [values, handleInputChange, reset] = useForm({
        Mons: ''
    })

    const texto = localStorage.getItem("SearchMons");


    const handleSearchMons = () => {
        const newMons = [...Dmons, values.Mons]
        if (!values.Mons) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Sin nombre!",
            })
        } else {
            setMons(newMons)

            localStorage.setItem('SearchMons', values.Mons)
            Swal.fire({
                icon: 'success',
                title: 'Digimon Añadido',
                text: 'El Digimon ha sido añadido a la pagina.'
            })
            reset()
        }
    }

    const handleDeleteMons = () => {

        if (Dmons.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'No hay Digimons en la página',
                text: 'No se ha encontrado ningún Digimon a eliminar'
            })

        } else {
            const lastIndex = Dmons.length - 1;

            // Elimina el último elemento
            Dmons.splice(lastIndex, 1);

            const delmon = [...Dmons]

            // const delMons = Dmons.splice(Dmons.length - 1, 1); 
            setMons(delmon)

            Swal.fire({
                icon: 'success',
                title: 'Digimon Eliminado',
                text: 'El Digimon ha sido eliminado de la pagina.'
            })
        }

    }


    return (

        <>
            <nav className="navbar bg-dark border-bottom border-body text-warning d-flex justify-content-center align-items-center" data-bs-theme="dark">

                <div className="input-group container-fluid">
                    <span className="input-group-text dropdown">Nombre</span>
                    <input
                        className="form-control"
                        name="Mons"
                        onChange={handleInputChange}
                        type="text"
                        value={values.Mons}

                    />

                    <button
                        className="bi bi-search btn btn-warning"
                        onClick={handleSearchMons}
                        type="button"
                    >    Buscar</button>
                    <button
                        className="bi bi-trash btn btn-danger"
                        onClick={handleDeleteMons}
                        type="button"
                    >     Borrar</button>
                </div>

                {
                    <div className="text-center">
                        <h3>Ultima búsqueda: {texto}</h3>
                    </div>
                }

            </nav>

        </>


    )
}

export default SearchMons