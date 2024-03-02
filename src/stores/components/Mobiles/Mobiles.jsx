import React from 'react';
import {mobileData} from '../../data/mobiles';
import '../Css/products.css'

const mobImg = mobileData.slice(0,5)

const Mobiles = () => {
  return (
    <>
    <h2 className='prodTitle'>Mobiles</h2>
        <div className='prodSection'>
        {
            mobImg.map((item)=>{
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

export default Mobiles
