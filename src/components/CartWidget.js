const cartImg = <img class="cart__img" src="./img/cart.png" alt="carrito"/>
const articulos = 0;
const CartWidget = () => {
    return(
      <div class="cart">
        <div>
        <p id="cart">Carrito ( {articulos} )<span>{cartImg}</span></p>
        </div>
      </div>
    )
    }
    
  export default CartWidget;