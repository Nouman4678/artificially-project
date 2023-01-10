import React , { useState, useEffect } from 'react'
import "./BackgroundImage.css"
import image from "../Assests/Images/bg-image.png";
export default function BackgroundImage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);
  return (
    <div>
    {visible &&
    <div className='backgroundCover'>
        <img src={image} className='backgroundImage' alt="bg-pic"></img>
    </div>}
    </div>
  )
}
