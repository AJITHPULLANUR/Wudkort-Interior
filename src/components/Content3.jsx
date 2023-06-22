import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import kit1 from './images/kitchen/01.jpg'
import kit2 from './images/kitchen/02.jpg'
import kit3 from './images/kitchen/03.jpg';


const Content3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='cont3sub'>

        <Slider className='diiv' {...settings}>


        <div className='imgdiv'>

<img width="1000px" height="500px" src={kit1} className="img" />

</div>


<div>
<img width="1000px" height="500px" src={kit2} className="img" />
</div>

<div>
<img width="1000px" height="500px" src={kit3} className="img" />
</div>


        
        
        
        </Slider>

    </div>
  )
}

export default Content3