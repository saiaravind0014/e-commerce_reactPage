import React from 'react';
import {computerData} from '../../data/computers';
import '../Css/products.css'
import { Link } from 'react-router-dom';

const comImg = computerData.slice(0,5)

const Computers = () => {
  return (
    <>
    <h2 className='prodTitle'>Computers</h2>
    <Link to={'/computers'}>
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
    </Link>
    </>
  )
}

export default Computers
