import React , {useState, useEffect}from 'react'
import "./BackgroundLogo.css"
import logo from "../Assests/Images/artificiallyai_title_logo.png"
export default function BackgroungLogo() {
    const [showBackgroundLogo,setShowBackgroundLogo] = useState(false);
    useEffect(() => {
    setInterval(() => {
      setShowBackgroundLogo(true)
    }, 500);
  }, [])

  let date = new Date();
    let currentTime= date.toLocaleTimeString();
    let currentDate= date.toLocaleDateString();
  
    return (
        <div>
        { showBackgroundLogo && <div className='backgroundLogo'>
        <img className='backgroundLogo-img' src={logo} alt="logo"></img>
        <div className='current-date'>
            {currentTime}{currentDate}
        </div>
        </div>}
        
        </div>

  )
}
