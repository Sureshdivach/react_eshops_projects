import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./comp_css/Productes.css"
export const Productes = () => {
  const [products, setProducts] = useState([]); // Fixed naming convention
  
  useEffect(() => {
    ProductApi();
  }, []);
  
  const ProductApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setProducts(data); 
      } else {
        console.error("Failed to fetch products");
        
      }
    } catch (error) {
      console.error("Error fetching products:", error);
     
    }
  };
  // Function to handle deletion of a product-------------------------------------------------------------------
  const handleDelete = async (productId,index) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok ) {
       
           const updatedProducts = [...products]; 
           const index = products.findIndex(product => product.id === productId);
          updatedProducts.splice(index, 1);
          setProducts(updatedProducts);      
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product.");
    }
  };
  console.log(products);
  
  return (
    <>
      {
        products.length === 0 ? (
         
          <p className='loadinImg'> 
            <img src='https://cdn.pixabay.com/animation/2023/10/10/13/27/13-27-45-28_512.gif' alt='' />
            <h1>Please wait.......................</h1></p> 
        ) : (
          <div className='product-contener '>{
          products.map((product, index) => (           
            <div key={product.index}  className='details border border-0  d-flex justify-content-around  rounded m-0 p-1'> 
              <div className='w-50 m-1'> 
                <img src={product.image} alt={product.title}  className='w-100  text-center h-100'/> 
              </div>
              <div className='w-50 d-flex flex-column align-self-end m-1 '> 
                <h6>{product.title}</h6>
                <h5>{product.price}</h5>
                <br/> 
                <div className='w-100 border border-0   d-flex  justify-content-between  p-1'>
                  <Link to={`/product/${product.id}`}>
                    <button className='border-0 p-1 rounded bg-primary text-white'>Details</button>
                  </Link>
                  <button onClick={() => handleDelete(product.id)}  className='border-0 p-1 rounded bg-danger text-white'>Delete</button> 
                </div>
              </div>
            </div>
           
          ))}
          </div>
        )
      }
    </>
  );

  
  
};
