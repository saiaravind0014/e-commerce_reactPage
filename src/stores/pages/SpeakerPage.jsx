import React from 'react'
import { speakerData } from '../data/speaker'
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

const SpeakerPage = () => {
    return (
        <>
            <PageSection>
                {speakerData.map((item)=>{
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

export default SpeakerPage
