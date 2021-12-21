const redbullHat = <img class="item__img" src="./img/redbull_hat.png" alt="redbull gorra"/>
const ItemsListContainer = () => {
    return(
        <div class="items">
            <div class="item">
                <div>{redbullHat}</div>
                <div class="card-body">
                    <p class="card-text">Gorra Red Bull Racing</p>
                    <button class="btn btn-dark">Comprar</button>
                </div>
            </div>
            <div class="item">
                <div>{redbullHat}</div>
                <div class="card-body">
                    <p class="card-text">Gorra Red Bull Racing</p>
                    <button class="btn btn-dark">Comprar</button>
                </div>
            </div>
            <div class="item">
                <div>{redbullHat}</div>
                <div class="card-body">
                    <p class="card-text">Gorra Red Bull Racing</p>
                    <button class="btn btn-dark">Comprar</button>
                </div>
            </div>
        </div>
    )
    }
    
  export default ItemsListContainer;