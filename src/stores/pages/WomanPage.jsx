import React from 'react'
import { womanData } from '../data/woman'
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
    }
`;

const WomanPage = () => {
    return (
        <>
            <PageSection>
                {womanData.map((item)=>{
                    return(
                        <div>
                            <PageImg className='pageImg'>
                                <img src={item.image} alt="" />
                            </PageImg>
                            <div className='proModel'>
                                {item.category},{item.model}
                            </div>
                        </div>
                    )
                })}
            </PageSection>
        </>
      )
}

export default WomanPage