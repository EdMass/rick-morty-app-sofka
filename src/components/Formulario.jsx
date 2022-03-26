import React from 'react'
import { useFormulario } from '../hooks/useFormulario'
import Swal from 'sweetalert2'

function Formulario({setPersonajeNombre}) {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })

    const {nombre} = inputs

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nombre)

        if (!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Debe escribir un personaje',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }

        setPersonajeNombre(nombre.trim().toLowerCase())
        reset()
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Ingrese personaje'
        className='form-control mb-2'
        value={nombre}
        onChange={handleChange}
        name="nombre" //coloca el nombre en la propiedad del useFormulario
        />
        <button type='submit' className='btn btn-info' >
            Buscar
        </button>
    </form>
  )
}

export default Formulario