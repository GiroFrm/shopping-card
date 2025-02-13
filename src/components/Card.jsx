import React from 'react'
import AddToCartButton from './AddToCartButton'

function Card({prop, addIdProduct, addProductsCart}) {

  return (
    <div className='card'  style={{ padding: '0.3rem'}}>
    <div style={{ height:'280px', display:'grid', placeContent:'center'}}>
    <img style={{maxWidth:'220px', maxHeight:'270px'}} src={prop.image} alt={prop.image} />
    </div>
    <p className='card__title'>{prop.title}</p>
    <p className='card__price'>${prop.price}</p>
    <div>
     <AddToCartButton prop={prop} addIdProduct={addIdProduct} addProductsCart={addProductsCart}/>
    </div>
  </div>
  )
}

export default Card