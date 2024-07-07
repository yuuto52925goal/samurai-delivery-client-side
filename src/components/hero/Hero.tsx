"use client"
import React, { useEffect, useState } from 'react'
import './Hero.css'
import Image from "next/image";
import axios from 'axios';

export default function Hero() {

    const [imageUrl, setImageUrl] = useState('');
    const fetchRandomImage = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_FLASK_URL}/image/random`, { responseType: 'blob' });
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
    <div>
        {imageUrl ? <img src={imageUrl} alt="Random" /> : <p>Loading...</p>}
    </div>
  )
}
