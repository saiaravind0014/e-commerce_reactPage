import React from 'react'
import {kitchenData} from '../../data/kitchen';
import '../Css/products.css'
import { Link } from 'react-router-dom';

const kitImg = kitchenData.slice(0,5)

const Kitchen = () => {
    return (
        <>
        <h2 className='prodTitle'>Kitchen</h2>
            <Link to={'/kitchen'}>
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
            </Link>
        </>
      )
}

export default Kitchen
