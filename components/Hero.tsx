"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';


const Hero = () => {
    const handleScroll = () => {}
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, rent or buy a property — quickly and easily!
            </h1>
            
            <p className="hero__subtitle">
            Simplify your real estate journey with our seamless property search and booking process.
            </p>
            
            <CustomButton
             title = "Explore properties"
             containerStyles = "bg-primary-blue text-white rounded-full mt-10"
             handleClick = {handleScroll}
             />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src = "/house.png" alt = "hero" fill className="object-contain"/>
                </div>
            </div>
        </div>
  )
}

export default Hero