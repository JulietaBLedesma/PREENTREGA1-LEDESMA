import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path= '/' element={<ItemListContainer texto= 'Bienvenid@ a mi tienda!'/>} />
    <Route path= '/item' element={<ItemDetailContainer/>} />
    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
