import React, { useState } from 'react'
import { womanData } from '../data/woman'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

const WomanPage = () => {
    
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item => item !== mango))
        }else{
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
        womanData:womanData.filter((orange)=>selectedProduct.includes(orange.brand))

    return (
        <>
            <FullContainer>
            <SelectedProd className="pord-selected">
                {womanData.map((woman)=>{
                    return(
                        <ProdInput>
                            <label>
                                <input type="checkbox" name="" id="" 
                                checked = {selectedProduct.includes(woman.brand)}
                                onChange={()=>companyHandler(woman.brand)}
                                />
                                {woman.brand}
                            </label>
                        </ProdInput>
                    )
                })}
            </SelectedProd>
            <PageSection>
                {filteredProduct.map((item)=>{
                    return(
                        <CardContainer>
                            <Link to={`/woman/${item.id}`}>
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

export default WomanPage
