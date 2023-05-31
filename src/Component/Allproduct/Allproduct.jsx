import React from 'react'
import SingleProduct from '../SingleProduct/SingleProduct';

const Allproduct = (props) => {
  console.log(props.can);
  const{name}=props.can
 
  return (
    <div>
    <h2>{name}</h2>

   <SingleProduct data={name}  ></SingleProduct>   
    </div>
  )
}

export default Allproduct