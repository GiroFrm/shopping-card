import { useState, useMemo } from 'react'


function useProductQuatities(cartProducts, addProductsbyIDCart, removeProductCopyCart) {

  const initialQuantities = useMemo(() => {
    return cartProducts.reduce((count, prod) => {
      count[prod.id] = (count[prod.id] || 0) + 1;
      return count;
    }, {});
  }, [cartProducts]);

  const [qty, setQty] = useState(initialQuantities);

  function handleIncreaseQty(id) {
    setQty(prevQty => {
      const updatedQty = { ...prevQty, [id]: prevQty[id] + 1 };
      return updatedQty;
    });
    // update cartItems
    addProductsbyIDCart(id);
  }

  function handleDecreaseQty(id) {
    setQty(prevQty => {
      if (prevQty[id] > 0) {
        const updatedQty = { ...prevQty, [id]: prevQty[id] - 1 };
        return updatedQty;
      }
      else {
        return prevQty;
      }
    });
    removeProductCopyCart(id);
  }

  return { qty, handleIncreaseQty, handleDecreaseQty }
}

export default useProductQuatities