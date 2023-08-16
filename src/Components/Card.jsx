import React from 'react'

const Card = ({usuario}) => {
  return (
    <div>
       <h3>Hola {usuario.nombre} Ya registramos tu libro favorito: {usuario.libroFavorito}</h3> 
       
      
    </div>
  )
}

export default Card
