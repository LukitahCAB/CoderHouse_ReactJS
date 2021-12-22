import React from 'react';
const cartImg = <img className='cart__img' src='./img/cart.png' alt='carrito'/>
const articulos = 0;
const CartWidget = () => {
    return(
      <div className='cart'>
        <div>
        <p id='cart'>Carrito ( {articulos} )<span>{cartImg}</span></p>
        </div>
      </div>
    )
    }
    
  export default CartWidget;