import React, {useState,useEffect} from 'react'
import logo from "../Assests/Images/artificiallyai_title_logo.png"
import bgPic from "../Assests/Images/bg-image.png"
import "./Header.css"
import image1 from '../Assests/Images/broken master chief helmet in the grass.png'
import image2 from '../Assests/Images/pikachu having dinner in renaissance style.png'
import image3 from '../Assests/Images/elephants dancing together.png'
import image4 from '../Assests/Images/ship sailing in the arctic with pirate flag.png'
import image5 from '../Assests/Images/teddy bears in the style of ukiyo-e.png'
import image6 from '../Assests/Images/warrior having cup of coffee in anime.png'
export default function Header() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }
  // function next() {
  //   setCurrentIndex(currentIndex + 1 === images.length ? 0 : currentIndex + 1);
  // }
  // function prev() {
  //   setCurrentIndex(currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1);
  // }
  // <button className='prev' onClick={prev}>&lt;</button>  
  // <button className='next' onClick={next}>&gt;</button>
  return (
    <div className='header'>
    <div className='navbar'>
    <a href='/'><img className='logo' src={logo} alt="logo"></img></a>
    <div className='social-logos'>
    <a href='/' target="_blank"><i class="bi bi-facebook" style={{"fontSize":"2.5rem", "color":"#3b5998"}}></i></a>
    <a href='/' target="_blank"><i class="bi bi-twitter" style={{"fontSize":"2.5rem", "color":"#00acee"}}></i></a>
    <a href='/' target="_blank"><i class="bi bi-linkedin" style={{"fontSize":"2.5rem", "color":"#0072b1"}}></i></a>
    </div>
    </div>
    <div className='bg-cover'>
    <img className='bg-image' src={bgPic} alt="background Pic"></img>
    </div>
    <div className='header-content'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-7'>
    <h1 className='header-heading'>Create unique images with Artificial Intelligence</h1>
    <p className='header-text'>Use this website to create unique 1 of 1 images with artificial intelligence and order the results to be printed on a t-shirt of your size! (No shipping fees!)</p>
    </div>
    <div className='col-md-5 img-slider'>
    <img className="header-img" src={images[currentIndex]} alt="header slider" onClick={handleClick}
    ></img>
    <div className="shadow">
    <img className="next-img" src={images[(currentIndex + 1) % images.length]} alt="Next img" />
  </div>
  <div className="tshadow">
  <img className="third-img" src={images[(currentIndex + 2) % images.length]} alt="Third img" />
</div>
   
      
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
