import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar'
const FullContainer = styled.div`
min-height:100svh;
display:flex;
`;

const SelectedProd = styled.div`
padding-top:10px;
width:30%;
border:1px solid #113b0ebd;
`;
const ProdInput = styled.div`
font-size:20px;
input{
    margin:10px;
    
}
`;
const PageSection = styled.div`
display: grid;
grid-template-columns: repeat(4,280px);
gap: 10px;
`;
const PageImg = styled.div`
    width: 250px;
    height: 250px;

    img {
        width: 100%;
        border-radius:5px;
    }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const MobilePage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item => item !== mango))
        }else{
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
        mobileData:mobileData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
    <>
        {/* <Navbar/> */}
        <FullContainer className="FullContainer">
            <SelectedProd className="pord-selected">
                {mobileData.map((phone)=>{
                    return(
                        <ProdInput>
                            <label>
                                <input type="checkbox" name="" id="" 
                                checked = {selectedProduct.includes(phone.company)}
                                onChange={()=>companyHandler(phone.company)}
                                />
                                {phone.company}
                            </label>
                        </ProdInput>
                    )
                })}
            </SelectedProd>
            <PageSection>
                {filteredProduct.map((item)=>{
                    return(
                        <CardContainer>
                            <Link to={`/mobiles/${item.id}`}>
                            <PageImg className='pageImg'>
                                <img src={item.image} alt="" />
                            </PageImg>
                            </Link>
                            <Desc className='proModel'>
                                {item.category},{item.model}
                            </Desc>
                        </CardContainer>
                    )
                })}
            </PageSection>
        </FullContainer>
    </>
  )
}

export default MobilePage
