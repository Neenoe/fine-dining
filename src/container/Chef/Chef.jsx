import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />

    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef world"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>

      <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</p>

      </div>
      <p className='p__opensans'>sit amet consectetur adipisicing elit. Placeat adipisci ad commodi hic ipsum voluptatibus voluptatem tenetur aliquid culpa, iste voluptate nihil dolorem consequuntur repudiandae! Reiciendis consectetur pariatur explicabo unde.</p>


    </div>

    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>Chef x founder</p>
      <img src={images.sign} alt="" />

    </div>
   
  </div>
  </div>
);

export default Chef;
