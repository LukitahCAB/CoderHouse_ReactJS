import ItemCount from './ItemCount'
const redbullHat = <img className='item__img' src='./img/redbull_hat.png' alt='redbull gorra'/>
const Item = ({gorra}) => {
    
    return(
            <div className='item'>
                <div>{redbullHat}</div>
                <div className='card-body'>
                    <p className='card-text'>{gorra}</p>
                    <div>
                        <ItemCount initial={1} stock={7}/> 
                    </div>
                </div>
            </div>
    )}
    
  export default Item;