import React from 'react'
import { furnitureData } from '../stores/data/furniture'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../stores/Context/CartContext'

const SectionIn = styled.div`
display:flex;
`
const ImageIn = styled.div`
width: 500px;
height: 500px;
img {
    width: 100%;
    height:100%;
}
`
const DetailsIn = styled.div`
padding:20px;
`
const CartButton = styled.button`
background-color:#113b0ebd;
color: antiquewhite;
font-size:20px;
padding:10px;
width:10rem;
border-radius:5px;
border:none;
cursor:pointer;
&:hover {
    background-color: #bfcc89;
    color:#113b0ebd;
    border:2px solid #113b0ebd;
  }
`;
const [CompanylIn, ModelIn, PriceIn, DescIn] = Array(4).fill().map(() => styled.div`
  margin:10px;
`);

const FurnitureSingle = () => {
  const {id} = useParams()
  const {addToCart, cartItems} = useCart()

  const product = furnitureData.find((item)=>item.id === id)
return (
    <>
    <SectionIn className='SectionIn'>
      <ImageIn className='ImageIn'>
          <img src={product.image}></img>
      </ImageIn>
      <DetailsIn>
          <CompanylIn className='CompanylIn'>
              <h3>{product.brand}</h3>
          </CompanylIn>
          <ModelIn className='ModelIn'>
              <h3>{product.model}</h3>
          </ModelIn>
          <PriceIn className='PriceIn'>
              <h2>{product.price}</h2>
          </PriceIn>
          <DescIn className='DescIn'>
              <p>{product.description}</p>
          </DescIn>
          <CartButton onClick={()=>addToCart(product)}>
              Add to Cart
          </CartButton>
      </DetailsIn>
      
    </SectionIn>
    </>
)
}

export default FurnitureSingle
