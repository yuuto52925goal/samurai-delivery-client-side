"use client"
import React, { useState } from 'react'
import mtFuji from '../images/fuji-dark.png'
import Navbar from '@/components/navbar/Navbar'
import "./MainProduct.css"

const MaiunProduct = () => {

    const [imageUrl, setImageUrl] = useState(mtFuji.src)
    console.log('hello')


  return (
    <>
        <div style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover', // Ensure the image covers the div
            backgroundPosition: 'center', // Center the image
            height: '100vh', // Set the height of the div
            width: '100vw', // Set the width of the div
          }}>
            <Navbar />
        </div>
        <div className='exprenations'>
          <div className='feature'>
            <h1>Seanonal Japanese Snack</h1>
          </div>
        </div>
    </>
  )
}

export default MaiunProduct