import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators className='carousel'>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='c1.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='c2.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='c3.jpg'
        alt='...'
      />
    </MDBCarousel>
  );
}