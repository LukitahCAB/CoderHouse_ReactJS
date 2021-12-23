import React, {useState} from 'react';
const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const confirmar = ()=> setCounter(initial);
    function increase() {
        if(counter < stock){
            setCounter(counter +1);
        }
    } 
    function decrease() {
        if(counter > initial){
            setCounter(counter -1);
        }
    } 
    const reset = ()=> setCounter(initial);
    return(
            <div className='itemCount container'>
                <button className='btn btn-dark' onClick={confirmar}>Al carrito</button>
                <button className='btn btn-dark' onClick={increase}>Agregar</button>
                <button className='btn btn-dark' onClick={decrease}>Restar</button>
                <button className='btn btn-outline-warning disabled m-1'>{counter}</button>
                <button className='btn btn-dark' onClick={reset}>Reset</button>
            </div>
    )}
export default ItemCount;