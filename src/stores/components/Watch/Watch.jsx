import React from 'react'
import {watchData} from '../../data/watch'
import '../Css/products.css'

const watchImg = watchData.slice(0,5)

const Watch = () => {
    return (
        <>
        <h2 className='prodTitle'>Watches</h2>
            <div className='prodSection'>
            {
                watchImg.map((item)=>{
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

export default Watch
