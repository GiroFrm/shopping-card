import React from 'react'
import Card from './Card'
import {useData} from '../hooks/useData';

function Cards({category, addIdProduct, addProductsCart}) {

   const {data, error, loading} = useData(category);
   
   if (loading) {
    return <h1>Loading Data...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  
  return (
     
    <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem'}}>
     
       {data && data.map(el=> (
        <Card key={el.id} 
              prop={el}
              addIdProduct={addIdProduct}
              addProductsCart={addProductsCart}
              />  
     ))}
    </div>  
  )
}

export default Cards