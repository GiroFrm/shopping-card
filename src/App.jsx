
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { useState } from 'react';
import useCategory from './hooks/useCategory';
import { MENS_CLOTHING } from './constants/apiConstants';

function App() {
 
  const [idProduct, setIdProduct] = useState([]);
  const  addIdProduct = (prop) => setIdProduct([...idProduct, prop.id]);
  
  const [cartProducts, setCartProducts] = useState([]);
  const addProductsCart =(product) => setCartProducts([...cartProducts, product]);

  const  { category, setCategory  } = useCategory(MENS_CLOTHING);

  const addProductsbyIDCart =(id) => {
    setCartProducts(prevCartProducts=>{
       const product = prevCartProducts.find(prod => prod.id === id);
       if(product){
       const newCartProducts = [...prevCartProducts, product];
          return newCartProducts;
       }
          return prevCartProducts;
    })
  }

  const removeProductCopyCart = (id) => { 
    setCartProducts(prevCartProducts => {
      const index = prevCartProducts.findIndex(product => product.id === id);
      if (index !== -1) {
          const newCartProducts = [...prevCartProducts];
          newCartProducts.splice(index, 1);
          return newCartProducts;
      }
      return prevCartProducts;
  });
  }

  const removeProductCart=(id) =>{
    setCartProducts(prevCartProducts => {
      return prevCartProducts.filter(prod=> prod.id !==id)
    })
  }
  
  const cartCount = cartProducts.length;

  return (
    <>
     <NavBar cartCount={cartCount}/>
     <Outlet context={{ 
              removeProductCopyCart, 
              removeProductCart,
              addIdProduct,
              addProductsbyIDCart, 
              idProduct, 
              cartProducts, 
              addProductsCart,
              category,
              setCategory }}/>
    </>
  )
}

export default App
