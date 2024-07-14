"use client"
import React, { useEffect, useState } from 'react'
import './Hero.css'
import HeroProduct from '../heroProduct/HeroProduct'


export default function Hero() {    

  return (
    <div className='hero'>
      <div className='concepts'>
        <div className='each-concept'>
          <h1 className='concept-text concept-num'>Free</h1>
          <h5 className='concept-text'>$0 for Shipping</h5>
        </div>
        <div className='each-concept'>
          <h1 className='concept-text concept-num'>1000+</h1>
          <h5 className='concept-text'>Numerous Users <br/>around the world</h5>
        </div>
        <div className='each-concept'>
          <h1 className='concept-text concept-num'>Anywheres</h1>
          <h5 className='concept-text'>Have Japanese Products Everywhere</h5>
        </div>
      </div>
      <HeroProduct productName="Seasonal Japanese Snack" productInfo="Experience the flavors of Japan with our subscription service, offering a delightful selection of seasonal snacks. Each box is filled with popular treats and a generous amount of carefully curated goodies. Enjoy the taste of Japan delivered right to your doorstep every month!" imageUrl=""/>
      <HeroProduct productName="Seasonal Japanese Snack" productInfo="Experience the flavors of Japan with our subscription service, offering a delightful selection of seasonal snacks. Each box is filled with popular treats and a generous amount of carefully curated goodies. Enjoy the taste of Japan delivered right to your doorstep every month!" imageUrl=""/>
      <HeroProduct productName="Seasonal Japanese Snack" productInfo="Experience the flavors of Japan with our subscription service, offering a delightful selection of seasonal snacks. Each box is filled with popular treats and a generous amount of carefully curated goodies. Enjoy the taste of Japan delivered right to your doorstep every month!" imageUrl=""/>
    </div>
  )
}
