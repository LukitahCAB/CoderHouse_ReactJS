import React from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import {useEffect, useState} from 'react'
const redbullHat = <img className='item__img' src='./img/redbull_hat.png' alt='redbull gorra'/>
const arrayProductos = [
    {id: '1', name: 'Gorra 1', stock : 5},
    {id: '2', name: 'Gorra 2', stock : 3},
    {id: '3', name: 'Gorra 3', stock : 4},
    {id: '4', name: 'Gorra 4', stock : 5}
]
const ItemsListContainer = ({gorra}) => {
    
    useEffect(() =>{

        const promise = new Promise((resolve, reject) => {

            setTimeout(() =>{

                resolve(arrayProductos)
            
            }, 2000)
        })

        promise.then((productos)=>{
            console.log('Cargado con exito');
            console.log(productos);
        })
        
    })
    return(
        <ItemList/>
    )
}
    
  export default ItemsListContainer;