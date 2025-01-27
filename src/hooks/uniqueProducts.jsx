import React, { useMemo } from 'react'

function useUniqueProducts(cartProducts) {

    const uniqueProducts  = useMemo(()=>{
      return  cartProducts
        .filter((item, index, self) => index === self.findIndex((t) => (t.id === item.id )))
    },[cartProducts]) 
  
    return {uniqueProducts}
}

export default useUniqueProducts;