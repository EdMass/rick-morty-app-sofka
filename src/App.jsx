
import { useState } from 'react'
import Formulario from './components/Formulario'
import RenderizarDatos from './components/RenderizarDatos'

const App = () => {

    const [personajeNombre, setPersonajeNombre] = useState('')
       
  return (
    <div className='container'>
        <h1>App Rick and Morty</h1>
        <Formulario setPersonajeNombre={setPersonajeNombre} />
        <RenderizarDatos personajeNombre={personajeNombre} />
    </div>
  )
}

export default App