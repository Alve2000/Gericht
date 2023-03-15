
import React from 'react';
import { images } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import './Chef.css';

const Chef = () => (

  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            At our restaurant, we believe in using only the freshest and highest quality ingredients 
          </p>
        </div>
        <p className='p__opensans'>
          to create exceptional dining experiences for our customers. 
          We're committed to sustainability, supporting local farmers, and delivering friendly, 
          attentive service.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>

    </div>

  </div>
);

export default Chef;
