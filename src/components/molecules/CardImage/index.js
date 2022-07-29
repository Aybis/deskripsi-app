import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function index({ image, type = false, handlerClick }) {
  return (
    <LazyLoadImage
      onClick={() => handlerClick(image)}
      effect="blur"
      alt=""
      height={'auto'}
      className={[
        'object-cover h-full w-full transition-all duration-300',
        type && 'sm:w-80',
      ].join(' ')}
      src={image} // use normal <img> attributes as props
    />
  );
}
