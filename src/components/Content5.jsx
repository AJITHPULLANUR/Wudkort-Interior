import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import font1 from "./images/front/020.jpg";
import font2 from "./images/front/030.jpg";
import font3 from "./images/front/040.jpg";
import font4 from "./images/front/1.jpg";
import font5 from "./images/front/2.jpg";
import font6 from "./images/front/44 copy.jpg";
import font7 from "./images/front/60c.jpg";
import font8 from "./images/front/L SHOPE 01.jpg";
import font9 from "./images/front/L SHOPE 02.jpg";
import font10 from "./images/front/L SHOPE 03.jpg";
import font11 from "./images/front/V 01.jpg";


const Content5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="content5">
      <Slider className='diiv' {...settings}>
        <div className="imgdiv">
          <img width="1000px" height="500px" src={font1} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font2} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font3} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font4} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font5} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font6} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font7} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font8} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font9} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font10} className="img" />
        </div>

        <div className="imgdiv">
          <img width="1000px" height="500px" src={font11} className="img" />
        </div>

       
      </Slider>
    </div>
  );
};

export default Content5;
