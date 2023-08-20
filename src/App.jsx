import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Cart/Cart'


function App() {
  

  return (
    <CartProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path= '/' element={<ItemListContainer texto= 'Bienvenid@ a mi tienda!'/>} />
    <Route path= '/categoria/:categoriaId' element={<ItemListContainer texto= 'Categoría seleccionada'/>} />
    <Route path= '/item/:id' element={<ItemDetailContainer/>} />
    <Route path= '/cart' element={<Cart/>} />
    </Routes>
    
    
    
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
