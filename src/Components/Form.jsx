import React, { useState } from 'react'
import Card from './Card'

const Form = ({setEnviado}) => {
    const[usuario,setUsuario] =useState({
        nombre:"",
        libroFavorito:""
    })
    const handleSubmit = ()=>{
        if(usuario.nombre.length > 3 && usuario.libroFavorito.length > 3){
            setEnviado(true)
            
        }
            else {
                setError(true)
            }
    }
    
    const[error, setError]=useState(false)

return (
<div>
    <label htmlFor=""> Nombre</label>
    <input type="text"onChange={(event)=>setUsuario({...usuario,nombre:event.target.value})} />
    <label htmlFor="">Tu libro favorito</label>
    <input type="text"onChange={(event)=>setUsuario({...usuario,libroFavorito:event.target.value})} />
    <button onClick={handleSubmit}>Enviar</button>
    {error && <h3>Corrobora por favor la informacion proporcionada</h3>}
    {enviado && <Card usuario={usuario} />}
</div>
)
}

export default Form
   
    
    
            
