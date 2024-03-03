import React from 'react'
import Mobiles from '../Mobiles/Mobiles'
import Computers from '../Computers/Computers'
import Watch from '../Watch/Watch'
import Men from '../Men/Men'
import Woman from '../Woman/Woman'
import Furniture from '../Furniture/Furniture'
import Ac from '../Ac/Ac'
import Kitchen from '../Kitchen/Kitchen'
import styled from 'styled-components'

const ProductContainer = styled.div`

`;

const Products = () => {
  return (
    <ProductContainer>
      <Mobiles/>
      <Computers/>
      <Watch/>
      <Men/>
      <Woman/>
      <Furniture/>
      <Ac/>
      <Kitchen/>
    </ProductContainer>
  )
}

export default Products
