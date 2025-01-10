import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./comp_css/Productdts.css"

export const ProductDetails = () => {
  const{productId}=useParams()
  const[productdetails,setProductDetails]=useState('')
  useEffect(()=>{
    proDetailsApi();
  },[productId])

    const proDetailsApi=async()=>{
      try {
        const response= await fetch(`https://fakestoreapi.com/products/${productId}`)
        if(response.ok){
          const data= await response.json()
          // console.log("productsDetails",data)
          setProductDetails(data)
        }

      } catch (error) {
        console.log("error",error)
               
      }

    }

  return (
    
    <>
       
       {productdetails.length === 0 ? (
         
          <p className=' loading m-auto '> 
            <img src='https://cdn.pixabay.com/animation/2023/10/10/13/27/13-27-45-28_512.gif' alt=''  />
            <h1>Please wait............</h1>
            </p> 
            
        ) :(
        <div key={productdetails?.id} id='prodct_div'>
                 <img src={productdetails?.image} alt='' className= 'prodct_img'/>
                  <div className=''>
                    <h2>{productdetails?.title}</h2>
                    <h5>{productdetails?.category}</h5>
                    <h6>{productdetails?.price}</h6>
                    <p>{productdetails?.description}</p>
                   
                  </div>
        </div>
      )}
      
    </>
  )
}
