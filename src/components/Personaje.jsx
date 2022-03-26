import React from 'react'

function Personaje({personaje}) {

    const {name, species, image, status, type,gender ,location} = personaje


  return (
    <div className='col-md-4 mb-2'>
        <div className='card'>
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