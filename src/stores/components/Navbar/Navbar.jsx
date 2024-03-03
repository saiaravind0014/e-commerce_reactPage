import React from 'react'
import '../Navbar/navbar.css'
import {Link} from 'react-router-dom' //Link as StyledLink
import styled from 'styled-components'
import { useCart } from '../../Context/CartContext'

const NavContainer = styled.div`

`;
const WebHead = styled(Link)`

text-decoration: none;
font-size: 2rem;
color: antiquewhite;
`;
const StyledLink = styled(Link)`
text-decoration: none;
  li {
    color: white;
    
  }
`;
const CartLink = styled(Link)`

text-decoration: none;
font-size: 20px;
color: antiquewhite;
span{
  color:red;
  padding:0 5px;
}
`;

const Navbar = () => {

  const {cartItems} = useCart()
  return (
    <>
      <NavContainer>
      <div className="navSection">
          <WebHead to={'/'}>
            <div className="title">E-com Web</div>
          </WebHead>
          {/* <div className="title">E-com Web</div> */}
          <div className="search">
              <input className='searchBox' type='text' placeholder='Search...'></input>
          </div>
          <div className="user">
              <div className="user-status">SignIN / SignOut</div>
              <CartLink to={'/cart'}>
                <div className="cart">Cart
                  <span>
                    {cartItems.length}
                  </span>
                </div>
              </CartLink>
          </div>
          
          
      </div>
      <div className="subMenu">
        <ul>
          <StyledLink to={'/mobiles'}>
            <li>Mobiles</li>
          </StyledLink>
          <StyledLink to={'/computers'}>
           <li>Computers</li>
          </StyledLink>
          <StyledLink to={'/watches'}>
            <li>Watches</li>
          </StyledLink>
          <StyledLink to={'/men'}>
            <li>Men Fashion</li>
          </StyledLink>
          <StyledLink to={'/woman'}>
            <li>Woman Dressing</li>
          </StyledLink>
          <StyledLink to={'/books'}>
           <li>Books</li>
          </StyledLink>
          <StyledLink to={'/furniture'}>
            <li>Furniture</li>
          </StyledLink>
          <StyledLink to={'/ac'}>
            <li>AC</li>
          </StyledLink>
          <StyledLink to={'/kitchen'}>
            <li>Kitchen</li>
          </StyledLink>
          <StyledLink to={'/fridges'}>
            <li>Fridges</li>
          </StyledLink>
          <StyledLink to={'/speakers'}>
            <li>Speakers</li>
          </StyledLink>
          <StyledLink to={'/tv'}>
            <li>TV's</li>
          </StyledLink>        
        </ul>
      </div>
      </NavContainer>
    </>
  )
}

export default Navbar
