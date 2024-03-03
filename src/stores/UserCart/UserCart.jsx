import React from 'react'
import styled from 'styled-components'
import { useCart } from '../Context/CartContext'

const CartHeading = styled.h2`
padding-top:10px;
text-align: center;
font-size:3rem;
`;
const CartInfo = styled.p`
text-align: center;
`;

const CartContainer = styled.div`
   display: flex;
    flex-wrap: wrap;
   justify-content: center;
   align-items: center;
`;
const CartSection = styled.div`
display: flex;
border: 3px double #113b0ebd;
max-height:150px;
max-width:600px;
width: 100%;
justify-content: center;
align-items: center;
 margin: 30px;
`;
const CartImg = styled.div`
max-width:120px;
max-height:130px;
width:120px;
height:130px;
img{
    width: 100%;
    height:100%
}
`;
const CartDetails = styled.div`
display: flex;
flex-direction:column;
gap:5px;
width: 50%;
justify-content: center;
align-items: center;
margin: 50px;
`;

const RemoveButton = styled.button`
background-color:#113b0ebd;
color: antiquewhite;
font-size:20px;
padding: 15px;
width: 10rem;
margin-right:5px;
border-radius:5px;
border:none;
cursor:pointer;
font-weight: 500;
&:hover {
    background-color: #bfcc89;
    color:#113b0ebd;
    border:2px solid #113b0ebd;
    font-weight: 900;
  }

`;

const UserCart = () => {

    const {cartItems, addToCart,removeFromCart} = useCart()
  return (
<>
    <div>
        <CartHeading className='y-cart'>Your Cart</CartHeading>
        {cartItems.length ===0 ?
            (<CartInfo className='empty'>Your Cart is Empty</CartInfo>):
            <CartContainer className='hi'>
                {cartItems.map((item)=>{
                    return(
                        <CartSection className='cart-section'>
                            <CartImg className="cart-img">
                                <img src={item.image} alt="" />
                            </CartImg>
                            <CartDetails className="cart-details">
                                <h3>{item.product}</h3>
                                <h2>
                                    {item.price}
                                </h2>
                                <h3>{item.model}</h3>
                            </CartDetails>
                            <RemoveButton className='removeBtn' onClick={() => removeFromCart(item)}>Remove</RemoveButton>
                        </CartSection>
                    )
                })}
            </CartContainer>

        }
        
    </div>
</>
  )
}

export default UserCart
