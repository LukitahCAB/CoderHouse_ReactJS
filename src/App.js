import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemsListContainer from './components/ItemsListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div  className='container mt-3'> 
      <nav>
        <Navbar/>
        <CartWidget/>
      </nav>
      <main>
        <ItemsListContainer gorra='Gorra Red Bull Racing'/>
      <ItemCount initial='1' stock='7' /> 
      </main>
    </div>
  );
}
export default App;
