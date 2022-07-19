import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Contacto from './views/Contact';

function App() {
  return (
    <>
       <BrowserRouter>
           <NavBar />
           <Routes>
             <Route path="/" element={<ItemListContainer greetings="Bienvenidos a E-Commerce Mundo de Ventas" />} />
              <Route index element={<Home />}/>
              <Route path="product/:id" element={<Detail/>} />
              <Route path="/Contacto" element={ < Contacto /> } />
           </Routes>
         </BrowserRouter>
     </>
   );
 }
 
export default App;
