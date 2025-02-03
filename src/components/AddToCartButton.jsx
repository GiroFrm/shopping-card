import React from 'react'

function AddToCartButton({prop, addIdProduct, addProductsCart}) {

    const handleClick = (prop)=>{
        addIdProduct(prop.id);
        addProductsCart(prop);
    }
  return (
    <button className='card__button' 
    onClick={()=>handleClick(prop)}>Add to cart</button>
  )
}

export default AddToCartButton