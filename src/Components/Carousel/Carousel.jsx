import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../Styling/carousel.css"
import { Link } from 'react-router-dom';
import { Categories } from '../../Data/CategoryData';

export default function Slider() {
    return (
        <div className='container-carousel'>
            <Carousel className='main-slider'
                swipeable={false}
                showThumbs={false}
                showStatus={false}
                autoPlay={"stopOnHover"}
                infiniteLoop>
                <div className='image-container'>
                    <a href="https://event.2performant.com/events/click?ad_type=banner&unique=318f30725&aff_code=66fef8958&campaign_unique=c91c384a7" target="_blank" rel="nofollow"><img src="https://img.2performant.com/system/paperclip/banner_pictures/pics/189153/original/189153.png" alt="somproduct.ro%20" title="somproduct.ro%20" border="0" className='imagine-aff pc' /></a>
                    <a href="https://event.2performant.com/events/click?ad_type=banner&unique=13ba8c7ad&aff_code=66fef8958&campaign_unique=c91c384a7" target="_blank" rel="nofollow"><img src="https://img.2performant.com/system/paperclip/banner_pictures/pics/189152/original/189152.png" alt="somproduct.ro%20" title="somproduct.ro%20" border="0" className='imagine-aff tel' /></a>
                </div>
                <div className='image-container'>
                    <a href="https://event.2performant.com/events/click?ad_type=banner&unique=1fa1b9c48&aff_code=66fef8958&campaign_unique=c91c384a7" target="_blank" rel="nofollow"><img src="https://img.2performant.com/system/paperclip/banner_pictures/pics/188314/original/188314.png" alt="somproduct.ro%20" title="somproduct.ro%20" border="0" className='imagine-aff pc' /></a>
                    <a href="https://event.2performant.com/events/click?ad_type=banner&unique=dba01ec38&aff_code=66fef8958&campaign_unique=c91c384a7" target="_blank" rel="nofollow"><img src="https://img.2performant.com/system/paperclip/banner_pictures/pics/188313/original/188313.png" alt="somproduct.ro%20" title="somproduct.ro%20" border="0" className='imagine-aff tel' /></a>
                </div>
            </Carousel>
            <div className='categories-div'>
                {Categories.map((categorie, key) => {
                    return (
                        <Link to={categorie.path} key={key} className="link-category">
                            <img src={categorie.icon} className="icon-category" alt='category' />
                            <span className='line-between'></span>
                            <p>{categorie.title}</p>
                        </Link>
                    )
                })}
                </div>
        </div>
    )
}
