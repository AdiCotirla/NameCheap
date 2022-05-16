import React from 'react'
import Slider from '../Components/Carousel/Carousel'
import Deals from '../Components/Deals/Deals'
import Navbar from '../Components/Menu/Menu'
import Stores from '../Components/Stores/Stores'
import "../Styling/home.css"
export default function Home() {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Deals/>
        <Stores/>
    </>
  )
}
