"use client"
import React, { Children, ReactNode, useEffect, useState } from 'react'
import samuraiLogo from '../../images/samurai_logo.jpg'
import Image from "next/image";
import './Header.css'
import Button from '@mui/material/Button';
import { orange, yellow } from '@mui/material/colors';
import axios from 'axios';
import LoadingImage from '../../images/loading.png'

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {

  const [imageUrl, setImageUrl] = useState('');
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_FLASK_URL}/image/random`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY
          }
        ,  responseType: 'blob' });
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

  useEffect(() => {
    console.log('hello')
    console.log(process.env.NEXT_PUBLIC_FLASK_URL)
    fetchRandomImage()
  }, [])

  return (
    <div className='header-background' style={{backgroundImage: `url(${imageUrl ?? LoadingImage})`}}>
      <div className='header'>
        <div className='company-info-header'>
          <Image src={samuraiLogo} alt='' className='samurai-logo' />
          <div>
            <p>Products</p>
          </div>
          <div>
            <p>About Us</p>
          </div>
        </div>
        <div className='user-shopping-header'>
          <Button variant="outlined" style={{ color: yellow[50] , border: `1px solid ${orange[800]}`, backgroundColor: orange[800]}}>Subscribe</Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          <p>Cart</p>
        </div>
      </div>
      {children}
    </div>
  )
}


export default Header;
