import React from 'react'

export const Warning = ({ productDelete, cancelDelete, deleteProduct }) => {


  return (
    <div className='container__warning'>
      <div className="warning">
        <h3>
          Seguro quieres eliminar el producto?<br />
          {productDelete?.name}
        </h3>
        <button onClick={ () => deleteProduct(productDelete) }>Eliminar</button>
        <button onClick={ () => cancelDelete() }>Cancelar</button>
      </div> 
    </div>
  )
}
