import React , {useState, useEffect}from 'react'
import './App.css';
import BackgroundImage from './components/Background/BackgroundImage';
import BackgroundLogo from './components/Background/BackgroundLogo';
import Header from './components/Header/Header';
import MasterPiece from "./components/MasterPiece/MasterPiece"
import Suggestions from './components/Suggestions/Suggestions';
import Footer from './components/Footer/Footer';

function App() {
  const[hideImage,sethideImage]=useState(true);
  useEffect(() => {
    setInterval(() => {
      sethideImage(false)
    }, 4000);
  }, [])
  
  return (
    <div className="App">
    {hideImage && <BackgroundImage/>}
    {hideImage && <BackgroundLogo/>}
    <Header/>
    <MasterPiece/>
    <Suggestions/>
    <Footer/>
    </div>
  );
}

export default App;
