import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import useCheckOut  from '../hooks/useCheckOut.jsx';
import approxTotal from '../utils/util.js';
import '../style/CheckOut.css';

function CheckOut() {
   
  const {
    uniqueProducts,
    handleIncreaseQty,
    handleDecreaseQty,
    removeProductCart,
    totalPriceApprox,
    qty,
  } = useCheckOut();

  
  function calculateTotal(price, qty) {
    let total = Number(price) * Number(qty);
    let rounded = approxTotal(total); 
       return rounded;
  }


  return (
    <div>

     {uniqueProducts && uniqueProducts.length > 0 ? 
      <div className='checkOut'>

      <div>
       {uniqueProducts&& uniqueProducts.map(el => (
       <div className="checkOut__list" key={el.id}>
        <img src={el.image} alt={el.image} style={{width: '60px'}} />
        <div>
  
        <p>{el.title} <span className='checkOut__price '>${calculateTotal(el.price, qty[el.id])}</span></p>
         <div className='btnsContainer' style={{display: 'flex', alignItems:'center', gap:'0.3rem'}}>
         <button onClick={()=>handleDecreaseQty(el.id)}>-</button>
         <span>{qty[el.id]}</span>
         <button onClick={()=>handleIncreaseQty(el.id)}>+</button>
         <FaTrashAlt onClick={()=>removeProductCart(el.id)}/> 
         </div>
        </div>
       
       </div>
     ))}
      </div>

     <div class="checkOut__pay">
        <div className='line-bottom'>
        <h4>Order Summary</h4>
        </div>
        <div className='line-bottom'>
        <p className='checkOut__total'>
          <span>Total</span> <span className='checkOut__price'>${approxTotal(totalPriceApprox)}</span>
        </p>
        </div>
        <div className='checkOut__button--container'>
        <button className='checkout__button'>CheckOut</button>
        </div>
     </div>

     </div> : <h1>Cart Empty</h1> }

    </div>
  )
}

export default CheckOut