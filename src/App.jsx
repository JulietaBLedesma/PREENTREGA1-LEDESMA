import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/NavBar'
import ItemListContainer from './componentes/itemListContainer'


function App() {
  

  return (
    <div >
    <Navbar />
    <h1><ItemListContainer texto= 'Bienvenid@ a mi tienda!'/></h1>
    </div>
  )
}

export default App
