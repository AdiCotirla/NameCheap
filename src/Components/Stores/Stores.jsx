import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styling/stores.css"
import noriel from "../../assets/noriel.png"
import asus from "../../assets/asus.jpg"
import carturesti from "../../assets/carturesti.png"
import bookcity from "../../assets/bookcity.jpg"
import casatex from "../../assets/casatex.png"
import erotic from "../../assets/erotic.png"
import fanatical from "../../assets/fanatical.png"
import optiblu from "../../assets/optiblu.png"
import kvantum from "../../assets/kvantum.jpg"
import hdv from "../../assets/hdv.png"
import fashion from "../../assets/fashion.jpg"
import parfums from "../../assets/parfums.jpg"
import som from "../../assets/som.gif"
import sportvision from "../../assets/sportvision.jpg"
import starshiners from "../../assets/starshiners.jpg"
import techstar from "../../assets/techstar.png"
import tricouri from "../../assets/tricouri.jpg"
import viva from "../../assets/viva.png"
import bazar from "../../assets/bazar.png"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class Stores extends Component {

  render() {
    var settings = {
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 200,
      centerPadding: "170px",
      responsive: [
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
      ]
    };
    return (
      <div className='container-stores'>
        <div className='above'></div>
        <div className='bellow'></div>
        <h2> OUR AFFILIATES</h2>
        <Slider {...settings}>
        <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=b56c7f788&redirect_to=http%253A//www.parfumss.ro' target="_blank" rel="nofollow" className='link-stores'>
              <img src={parfums} alt="shop" className='imagine-stores' />
            </a>
          </div>
        <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=c91c384a7&redirect_to=https%253A//www.somproduct.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={som} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=bb3071a7d&redirect_to=https%253A//noriel.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={noriel} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=07b5f0fed&redirect_to=https%253A//carturesti.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={carturesti} alt="shop" className='imagine-stores' />
            </a>
          </div> <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=3f2fc358a&redirect_to=https%253A//www.asus.com/ro/store/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={asus} alt="shop" className='imagine-stores' />
            </a>
          </div>
            <div className='store'>
              <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=8b83ae69a&redirect_to=https%253A//www.sportvision.ro/' target="_blank" rel="nofollow" className='link-stores'>
                <img src={sportvision} alt="shop" className='imagine-stores' />
              </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=d5075b651&redirect_to=https%253A//bazarulonline.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={bazar} alt="shop" className='imagine-stores' />
            </a>
          </div>
           <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=e21661a4f&redirect_to=https%253A//www.fanatical.com/en/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={fanatical} alt="shop" className='imagine-stores' />
            </a>
            </div>

          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=f6b801b06&redirect_to=http%253A//www.optiblu.ro' target="_blank" rel="nofollow" className='link-stores'>
              <img src={optiblu} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=0168a2bc0&redirect_to=http%253A//www.cassatex.ro' target="_blank" rel="nofollow" className='link-stores'>
              <img src={casatex} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=07fb23845&redirect_to=https%253A//www.bookcity.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={bookcity} alt="shop" className='imagine-stores' />
            </a>
          </div>
         
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=522f2a38e&redirect_to=https%253A//ro.kvantumsport.com/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={kvantum} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=9aadfc37d&redirect_to=https%253A//www.hainedevis.ro' target="_blank" rel="nofollow" className='link-stores'>
              <img src={hdv} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=884f13c4f&redirect_to=https%253A//www.dyfashion.ro' target="_blank" rel="nofollow" className='link-stores'>
              <img src={fashion} alt="shop" className='imagine-stores' />
            </a>
          </div>
          
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=d5050c390&redirect_to=https%253A//techstar.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={techstar} alt="shop" className='imagine-stores' />
            </a>
          </div>

          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=60b800055&redirect_to=https%253A//www.erotic24.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={erotic} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=4006b42be&redirect_to=https%253A//www.tricouri-misto.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={tricouri} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=b5fbaaccf&redirect_to=https%253A//vivacredit.ro/' target="_blank" rel="nofollow" className='link-stores'>
              <img src={viva} alt="shop" className='imagine-stores' />
            </a>
          </div>
          <div className='store'>
            <a href='https://event.2performant.com/events/click?ad_type=quicklink&aff_code=66fef8958&unique=103346d28&redirect_to=https%253A//starshiners.ro' target="_blank" rel="nofollow" className='link-stores'>
              <img src={starshiners} alt="shop" className='imagine-stores' />
            </a>
          </div>

        </Slider>
      </div>
    );
  }
}
