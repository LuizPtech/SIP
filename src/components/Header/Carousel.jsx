import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importe os logos das empresas
import Hometeck from "../../assets/hometeck.svg";
import BadenBanho from "../../assets/baden_banho.svg";
import DentalGlobo from "../../assets/dental_globo.svg";
import ArtGesso from "../../assets/artgesso.png";
import ComercialJD from "../../assets/JD.png";
import Comapa from "../../assets/comapa.png";
import Construfic from "../../assets/construfic.png";
import Construfort from "../../assets/construfort.png";
import Esplendor from "../../assets/esplendor.png";
import Enermat from "../../assets/enermat.png";
import Fachi from "../../assets/fachi.png";
import Parana from "../../assets/parana.png";
import Tonello from "../../assets/tonello.png";
import WL from "../../assets/WL.png";

// Array contendo os logos das empresas
const logos = [Hometeck, BadenBanho, DentalGlobo, ArtGesso, ComercialJD, Comapa, Construfic, Construfort, Esplendor, Enermat, Fachi, Parana, Tonello, WL];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index} className="logo-container-custom">
          <div className="logo-box-custom">
            <img src={logo} alt={`Logo ${index}`} className="logo-image-custom" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
