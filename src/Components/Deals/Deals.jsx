import React from 'react';
import { Link } from 'react-router-dom';
import { DealsData } from '../../Data/DealsData'
import "../../Styling/deals.css"

  export default function Deals(){
      return (
    <div className='container-deals'>
        <div className='all-deals-container'>
            {DealsData.map((deal, id)=>
            {
                return(
                    <div className='deal' key={id}>
                        <a href={deal.path} target="_blank" rel="nofollow" className='deal-link'>
                        <img src={deal.src} alt={deal.alt} title={deal.title} className="deal-img"/>
                        </a>
                     </div>
                )
            })}
        </div>
            <Link to="/deals" className='show-more'>See more</Link>
    </div>
  )
}
