
import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import RenderizarDatos from './components/RenderizarDatos'

const App = () => {

    const [personajeNombre, setPersonajeNombre] = useState('')
       
  return (
     
    <div className='container'>
        <Encabezado />
        <br></br>
        <Formulario setPersonajeNombre={setPersonajeNombre} />
        <RenderizarDatos personajeNombre={personajeNombre} />
    </div>
  )
}

export default App