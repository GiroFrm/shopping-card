
import { ELECTRONICS, JEWELRY, MENS_CLOTHING, WOMENS_CLOTHING } from '../constants/apiConstants';
import '../style/Card.css'
import '../style/Products.css'

import { useOutletContext } from 'react-router-dom';

import Cards from '../components/Cards.jsx';


function Products() {
  const { addIdProduct, addProductsCart, category, setCategory } = useOutletContext();

  return (
    <div style={{ margin:'auto'}}>
      <ul className='navBar products__categories' style={{cursor:"pointer", display:'flex', gap:"2rem", paddingBlock:"1rem", fontSize:"1.2rem"}}>
        <li onClick={()=>setCategory(MENS_CLOTHING)}>Men's clothing</li>
        <li onClick={()=>setCategory(WOMENS_CLOTHING)}>women's clothing</li>
        <li onClick={()=>setCategory(ELECTRONICS)}>electronics</li>
        <li onClick={()=>setCategory(JEWELRY)}>jewelery</li>
      </ul>
    
      <Cards category= {category} 
             addIdProduct={addIdProduct} 
             addProductsCart={addProductsCart}/>  
  </div>
  )
}

export default Products