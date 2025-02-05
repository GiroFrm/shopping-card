
import { useMemo } from 'react';
import approxTotal from '../utils/util';

function useTotalPrice(uniqueProducts, qty) {
    const totalPrice = useMemo(()=>{
     return   uniqueProducts.map(prod=> prod.price * qty[prod.id]).
        reduce((acc, curr) => acc + curr,0);
    }, [uniqueProducts, qty])
    const totalPriceApprox = approxTotal(totalPrice);

    return { totalPriceApprox }
}

export default useTotalPrice