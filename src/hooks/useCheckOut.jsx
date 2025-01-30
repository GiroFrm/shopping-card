import React from 'react'
import { useOutletContext } from 'react-router-dom';
import useProductQuatities from './useProductQuatities';
import useUniqueProducts from './uniqueProducts';
import useTotalPrice from './useTotalPrice';


function useCheckOut() {
  const {
    cartProducts,
    removeProductCopyCart,
    removeProductCart,
    addProductsbyIDCart,
  } = useOutletContext();

  const { qty, handleIncreaseQty, handleDecreaseQty } = useProductQuatities(
    cartProducts,
    addProductsbyIDCart,
    removeProductCopyCart
  );
  
  const { uniqueProducts } = useUniqueProducts(cartProducts);

  const { totalPriceApprox } = useTotalPrice(uniqueProducts, qty);

  return {
    uniqueProducts,
    handleIncreaseQty,
    handleDecreaseQty,
    removeProductCart,
    totalPriceApprox,
    qty,
  };
}

export default useCheckOut;