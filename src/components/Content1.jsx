import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import bed1 from './images/Bed/01.jpg';
import bed2 from './images/Bed/02.jpg';
import bed3 from './images/Bed/03.jpg';
import bed4 from './images/Bed/04.jpg';






const Content1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='content1'>
      

      
      
      <Slider className='diiv'{...settings}>
        <div className='imgdiv'>

          <img width="1000px" height="500px" src={bed1} className="img" />

        </div>


        <div>
        <img width="1000px" height="500px" src={bed2} className="img" />
        </div>

        <div>
        <img width="1000px" height="500px" src={bed3} className="img" />
        </div>

        <div>
          
        <img width="1000px" height="500px" src={bed4} className="img" />
        </div>




        

      </Slider>

      
    </div>
  )
}

export default Content1