import React from 'react'
import {kitchenData} from '../../data/kitchen';
import '../Css/products.css'

const kitImg = kitchenData.slice(0,5)

const Kitchen = () => {
    return (
        <>
        <h2 className='prodTitle'>Kitchen</h2>
            <div className='prodSection'>
            {
                kitImg.map((item)=>{
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

export default Kitchen
