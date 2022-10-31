import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import { useEffect, useState, useContext } from 'react';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import CartContext from './Context/CartContext';
import Cart from './components/Cart';
import CartContextProvider from './Context/CartContext';



function App() {

  const [state, setState] = useState([])
 
  const context = useContext(CartContext)


  return (
    <div>     
   
        <Router>
        <CartContext>  
        <NavBar></NavBar>
    
          <Routes>
          <Route exact path='/' element={
           <Home />
          }/>
        
          <Route exact path='/categoria/:id' element={
            <ItemListContainer items={state}/>
          }/>
         
      
          <Route exact  path='/items/:id' element={            
              <ItemDetailContainer></ItemDetailContainer>          
          }/>
           <Route exact path='/cart' element={
              <Cart />              
          }/>   
       
     
        </Routes>
        </CartContext>
      </Router>    
    </div>
  );
}
export default App;
