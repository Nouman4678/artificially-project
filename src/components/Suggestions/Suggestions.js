import React from "react";
import "./Suggestions.css";
import image1 from "../Assests/Images/ship sailing in the arctic with pirate flag.png";
import image2 from "../Assests/Images/broken master chief helmet in the grass.png";
import image3 from "../Assests/Images/warrior having cup of coffee in anime.png";
import image4 from "../Assests/Images/elephants dancing together.png";
import image5 from "../Assests/Images/pikachu having dinner in renaissance style.png";
import image6 from "../Assests/Images/teddy bears in the style of ukiyo-e.png";
import image7 from "../Assests/Images/master samurai having coffee in anime.png";
import image8 from "../Assests/Images/refugee in the desert.png";
import image9 from "../Assests/Images/samurai cows fighting bulls with swords.png";
import image10 from "../Assests/Images/samurai teddy bear in the style of ukiyo-e.png";
import image11 from "../Assests/Images/teddy bears in a dojo celebrating.png";
import image12 from "../Assests/Images/astronaut shopping for groceries.png";
const images = [
  {
    image: image9,
    caption: "Samurai cows fighting bulls with swords",
    alt: "Samurai cows fighting bulls with swords"
  },
  {
    image: image5,
    caption: "Pikachu having dinner in renaissance style",
    alt: "Pikachu having dinner in renaissance style"
  },
  {
    image: image11,
    caption: "Teddy bears in a dojo celebrating",
    alt: "Teddy bears in a dojo celebrating"
  },
  {
    image: image6,
    caption: "Teddy bears in the style of ukiyo-e",
    alt: "Teddy bears in the style of ukiyo-e"
  },
  {
    image: image2,
    caption: "Broken master chief helmet in the grass",
    alt: "Broken master chief helmet lying on the grass"
  },
  {
    image: image1,
    caption: "Ship sailing in the arctic with pirate flag",
    alt: "Ship sailing in the arctic with a pirate flag raised"
  },
  {
    image: image4,
    caption: "Elephants dancing together",
    alt: "Elephants dancing together"
  },
  {
    image: image8,
    caption: "Refugee in the desert",
    alt: "Refugee in the desert"
  },
  {
    image: image7,
    caption: "Master samurai having coffee in anime",
    alt: "Master samurai having coffee in anime"
  },
  {
    image: image10,
    caption: "Samurai teddy bear in the style of ukiyo-e",
    alt: "Samurai teddy bear in the style of ukiyo-e"
  },
  {
    image: image12,
    caption: "Astronaut shopping for groceries",
    alt: "Astronaut shopping for groceries"
  },
  {
    image: image3,
    caption: "Warrior having cup of coffee in anime",
    alt: "Anime warrior holding a cup of coffee"
  }
];
export default function Suggestions() {
  return (
    <div className="suggestions container">
      <h3 className="suggestions-heading">Unique suggestions for you!</h3>
      <div className="row">
        {images.map((image) => (
          <div className="card">
            <img src={image.image} className="card-img-top" alt={image.alt} />
            <div className="card-body">
              <p className="card-text">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

