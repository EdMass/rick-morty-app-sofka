
import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import Paginacion from './components/Paginacion'
import RenderizarDatos from './components/RenderizarDatos'

const App = () => {

    const [personajeNombre, setPersonajeNombre] = useState('')
       
  return (
     <>
     <Encabezado />
     <div className='container'>
        
        <br></br>
        <Paginacion />
        <Formulario setPersonajeNombre={setPersonajeNombre} />
        <RenderizarDatos personajeNombre={personajeNombre} />
        <Paginacion />
    </div>
    </>
    
  )
}

export default App