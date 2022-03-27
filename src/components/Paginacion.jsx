import React from 'react'

function Paginacion() {
  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <button className='page-link'>Prev</button>
            </li>
            <li className='page-item'>
                <button className='page-link'>Next</button>
            </li>
        </ul>
    </nav>
  )
}

export default Paginacion