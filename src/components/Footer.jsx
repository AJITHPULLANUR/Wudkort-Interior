import React from 'react'
import fb from './images/logos/icons8-facebook-144.png';
import telegram from './images/logos/icons8-telegram-48.png';
import youtube from './images/logos/icons8-youtube-48.png';
import insta from './images/logos/icons8-insta-48.png';
import pin from './images/logos/pinterest-logo-png-1984.png';
import whats from './images/logos/WhatsApp Image 2023-06-16 at 10.37.36.jpg';



const Footer = () => {
  return (
    <div className='footer'>
        

        <div className='media' >
            <div className='social'>

            
            <a href="https://www.facebook.com/ananthu.nibi?mibextid=LQQJ4d"><img width="30px" height="30px" src={fb} alt="" /></a>
            <a href="https://telegram.org/"><img width="30px" height="30px" src={telegram} alt="" /></a>
            <a href="https://youtu.be/6pzRZ79k9hs"><img width="30px" height="30px" src={youtube} alt="" /></a>
            <a href="https://instagram.com/___n_i_b_i__n___?igshid=ZWQyN2ExYTkwZQ=="><img width="30px" height="30px" src={insta} alt="" /></a>
            <a href="https://in.pinterest.com/"><img width="30px" height="30px" src={pin} alt="" /></a>
            </div>
        </div>

            <div className='qr'>
                <img width="80px" height="70px" src={whats} alt="" />




            </div>




   


    </div>
  )
}

export default Footer