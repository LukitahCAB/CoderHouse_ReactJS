import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemsListContainer from './components/ItemsListContainer';

function App() {
  return (
    <div> 
      <nav>
        <Navbar/>
        <CartWidget/>
      </nav>
      <main>
        <ItemsListContainer/>
      </main>
    </div>
  );
}

export default App;
