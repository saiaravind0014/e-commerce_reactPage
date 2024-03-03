import React from 'react'
import {furnitureData} from '../../data/furniture';
import '../Css/products.css'
import { Link } from 'react-router-dom';

const furnitureImg = furnitureData.slice(0,5)

const Furniture = () => {
    return (
        <>
        <h2 className='prodTitle'>Furniture</h2>
            <Link to={'/furniture'}>
            <div className='prodSection'>
            {
                furnitureImg.map((item)=>{
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

export default Furniture
