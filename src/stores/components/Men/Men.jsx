import React from 'react'
import {menData} from '../../data/men';
import '../Css/products.css'

const menImg = menData.slice(0,5)

const Men = () => {
    return (
        <>
        <h2 className='prodTitle'>Men</h2>
            <div className='prodSection'>
            {
                menImg.map((item)=>{
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

export default Men
