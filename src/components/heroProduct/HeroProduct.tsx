import React from 'react'
import './HeroProduct.css'
import productPic from '../../images/loading.png'
import Image from "next/image";
import beautifulLandscape from '../../images/beautiful.jpeg'
import { Button } from '@mui/material';
import { orange, yellow, grey } from '@mui/material/colors';

interface HeroProductProps {
    productName: string;
    productInfo: string;
    imageUrl?: string;
}
  
const HeroProduct: React.FC<HeroProductProps> = ({ productName, productInfo, imageUrl }) => {

    // console.log(productInfo, productName, imageUrl);

  return (
    <div className='hero-product'>
        <div className='product-info'>
            <h1 className='product-name'>{productName}</h1>
            <p>{productInfo}</p>
            <div>
                <Button variant="outlined" style={{ backgroundColor: orange[800] , border: `1px solid ${orange[800]}`, margin: "20px 20px 20px 0px", color: yellow[50]}}>Subscribe</Button>
                <Button variant="outlined" style={{ color: yellow[800] , border: `1px solid ${yellow[800]}`, margin: '20px 20px 20px 0px'}}>Read More</Button>
            </div>
        </div>
        <Image src={imageUrl || beautifulLandscape || productPic} alt="" className={`${beautifulLandscape ? 'beautiful-landscape': 'product-picture'}`} />
    </div>
  );
};

export default HeroProduct;
