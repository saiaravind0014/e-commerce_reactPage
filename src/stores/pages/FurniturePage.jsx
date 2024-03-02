import React from 'react'
import { furnitureData } from '../data/furniture'
import styled from 'styled-components'

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
        height:100%
    }
`;

const FurniturePAge = () => {
    return (
        <>
            <PageSection>
                {furnitureData.map((item)=>{
                    return(
                        <div>
                            <PageImg className='pageImg'>
                                <img src={item.image} alt="" />
                            </PageImg>
                            <div className='proModel'>
                                {item.type},{item.model}
                            </div>
                        </div>
                    )
                })}
            </PageSection>
        </>
      )
}

export default FurniturePAge
