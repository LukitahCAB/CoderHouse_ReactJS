import React from 'react';
const redbullHat = <img className='item__img' src='./img/redbull_hat.png' alt='redbull gorra'/>
let a, b, c;
const init = 1;
a = init; b = init; c = init;
const ItemsListContainer = ({gorra}) => {
    return(
        <div className='items'>
            <div className='item'>
                <div>{redbullHat}</div>
                <div className='card-body'>
                    <p className='card-text'>{gorra}</p>
                    <div>
                        <button className='btn btn-dark'>Agregar</button>
                        <button className='btn btn-dark'>+</button>
                        <button className='btn btn-dark'>-</button>
                        <button className='btn btn-outline-warning disabled'>{a}</button>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div>{redbullHat}</div>
                <div className='card-body'>
                    <p className='card-text'>{gorra}</p>
                    <div>
                        <button className='btn btn-dark'>Agregar</button>
                        <button className='btn btn-dark'>+</button>
                        <button className='btn btn-dark'>-</button>
                        <button className='btn btn-outline-warning disabled'>{b}</button>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div>{redbullHat}</div>
                <div className='card-body'>
                    <p className='card-text'>{gorra}</p>
                    <div>
                        <button className='btn btn-dark'>Agregar</button>
                        <button className='btn btn-dark'>+</button>
                        <button className='btn btn-dark'>-</button>
                        <button className='btn btn-outline-warning disabled'>{c}</button>
                    </div>
                </div>
            </div>
        </div>
    )}
    
  export default ItemsListContainer;