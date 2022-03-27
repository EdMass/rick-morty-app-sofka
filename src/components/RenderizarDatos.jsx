import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Personaje from './Personaje'

function RenderizarDatos({personajeNombre}) {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        manejadorApi(personajeNombre)
    },[personajeNombre])

    const manejadorApi = async(name) => {
        try {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            if(!respuesta.ok){
                return Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no encontrado',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }

            const contenido = await respuesta.json()
            setPersonajes(contenido.results)
            
        } catch (error) {
            console.log(error)
        }finally{

        }
    }

  return (
    <div className='row'> 
        {personajes.map((item) =>
            <Personaje key={item.id} personaje={item}/>
        )}
    </div>
  )
}

export default RenderizarDatos