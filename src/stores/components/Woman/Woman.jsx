import React from 'react'
import {womanData} from '../../data/woman';
import '../Css/products.css'
import { Link } from 'react-router-dom';

const womanImg = womanData.slice(0,5)

const Woman = () => {
    return (
        <>
        <h2 className='prodTitle'>Woman</h2>
            <Link to={'/woman'}>
            <div className='prodSection'>
            {
                womanImg.map((item)=>{
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

export default Woman
