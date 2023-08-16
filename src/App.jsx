import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'


function App() {
  const[enviado,setEnviado] = useState(false)

  return (
    <>
  
  <Form setEnviado= {setEnviado}/>
    </>
  )
}

export default App
