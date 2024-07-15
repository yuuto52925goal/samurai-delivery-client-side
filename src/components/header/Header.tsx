"use client"
import React, { Children, ReactNode, useEffect, useState } from 'react'
import samuraiLogo from '../../images/samurai_logo.jpg'
import Image from "next/image";
import './Header.css'
import Button from '@mui/material/Button';
import { orange, yellow } from '@mui/material/colors';
import axios from 'axios';
import LoadingImage from '../../images/loading.png'
import Navbar from '../navbar/Navbar';

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
    fetchRandomImage()
  }, [])

  return (
    <div className='header-background' style={{backgroundImage: `url(${imageUrl ?? LoadingImage})`}}>
      <Navbar />
      {children}
    </div>
  )
}


export default Header;
