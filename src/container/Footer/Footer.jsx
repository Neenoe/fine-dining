import React from 'react';
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>19 Adetoro Adelaja Magodo</p>
        <p className='p__opensans'>+2349060852030</p>
        <p className='p__opensans'>+2347034255501</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="log"/>
        <p className='p__opensans'> The best way to find yourself is to lose yourself</p>
        <img src={images.spoon} alt="spoon__img" style={{marginTop: '15'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram/>
          <FiTwitter/>

        </div>

      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>08.00am - 12am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>07.00am - 11.00pm</p>

      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>Gericht. All Rights Reserved</p>
</div>
  </div>
);

export default Footer;
