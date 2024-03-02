import React from 'react';
import {computerData} from '../../data/computers';
import '../Css/products.css'

const comImg = computerData.slice(0,5)

const Computers = () => {
  return (
    <>
    <h2 className='prodTitle'>Computers</h2>
    <div className='prodSection'>
      {
        comImg.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='prodImg' src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Computers
