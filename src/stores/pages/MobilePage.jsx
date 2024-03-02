import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar'
const FullContainer = styled.div`
display:flex;
`;

const SelectedProd = styled.div`
width:30%;
border:1px solid #113b0ebd;
`;
const ProdInput = styled.div`
input{
    margin:5px;
}
`;
const PageSection = styled.div`
display: grid;
grid-template-columns: repeat(4,300px);
gap: 10px;
`;
const PageImg = styled.div`
    width: 250px;
    height: 250px;

    img {
        width: 100%;
    }
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
                        <div>
                            <Link to={`/mobiles/${item.id}`}>
                            <PageImg className='pageImg'>
                                <img src={item.image} alt="" />
                            </PageImg>
                            </Link>
                            <div className='proModel'>
                                {item.category},{item.model}
                            </div>
                        </div>
                    )
                })}
            </PageSection>
        </FullContainer>
    </>
  )
}

export default MobilePage
