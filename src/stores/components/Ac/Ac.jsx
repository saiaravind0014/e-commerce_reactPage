import React from 'react'
import {acData} from '../../data/ac';
import '../Css/products.css'
import { Link } from 'react-router-dom';

const acImg = acData.slice(0,5)
const Ac = () => {
    return (
        <>
        <h2 className='prodTitle'>AC</h2>
            <Link to={'/ac'}>
            <div className='prodSection'>
            {
                acImg.map((item)=>{
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

export default Ac
