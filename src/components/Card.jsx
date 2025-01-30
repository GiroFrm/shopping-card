import React from 'react'

function Card({prop, addIdProduct, addProductsCart}) {

    const handleClick = (prop)=>{
        console.log(`this is product id` +prop.id);
        addIdProduct(prop.id);
        addProductsCart(prop);
    }

  return (
    <div className='card'  style={{ padding: '0.3rem'}}>
    <div style={{ height:'280px', display:'grid', placeContent:'center'}}>
    <img style={{maxWidth:'220px', maxHeight:'270px'}} src={prop.image} alt="" />
    </div>
    <p className='card__title'>{prop.title}</p>
    <p className='card__price'>${prop.price}</p>
    <div>
     <button className='card__button' 
                 onClick={()=>handleClick(prop)}>Add to cart</button>
    </div>
  </div>
  )
}

export default Card