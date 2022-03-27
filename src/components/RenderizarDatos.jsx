import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Paginacion from "./Paginacion";
import Personaje from "./Personaje";

function RenderizarDatos({ personajeNombre }) {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    const varUrl = `https://rickandmortyapi.com/api/character/?name=${personajeNombre}`;
    manejadorApi(varUrl);
  }, [personajeNombre]);

  useEffect(() => {
    manejadorApi(initialUrl);
  }, [initialUrl]);

  const manejadorApi = async (url) => {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Personaje no encontrado",
          icon: "error",
          confirmButtonText: "Cool",
        });
      }

      const contenido = await respuesta.json();
      setPersonajes(contenido.results);
      setInfo(contenido.info);
      
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const onPrev = () => {
      manejadorApi(info.prev)
  }

  const onNext = () => {
      manejadorApi(info.next)
  }

  return (
    <div className="container">
      <Paginacion next={info.next} prev={info.next} onNext={onNext} onPrev={onPrev} />
      <br></br>
      <div className="row">
        {personajes.map((item) => (
          <Personaje key={item.id} personaje={item} />
        ))}
      </div>
      <Paginacion next={info.next} prev={info.next} onNext={onNext} onPrev={onPrev} />
    </div>
  );
}

export default RenderizarDatos;
