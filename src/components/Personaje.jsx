import React from 'react'

function Personaje({personaje}) {

    const {name, species, image, status, type,gender ,location} = personaje


  return (
    <div className='col mb-4'>
        <div className='card' style={{minWidth: "230px"}} >
            <img src={image} alt={`imagen-${name}`} className='card-img-top' />
            <div className='card-body'>
                <h5>{name}</h5>
                <p>{gender}</p>
                <p>Status : {status}</p>
                {
                   type?<p>{type}</p>: <p>{species}</p>
                }
                <p>Location: {location.name}</p>
                
            </div>
        </div>
    </div>
  )
}

export default Personaje