import React from 'react';

export default function index({ image, type = false }) {
  return (
    <img
      src={image}
      alt=""
      className={[
        'sm:h-64 object-cover sm:hover:h-64 h-80 w-full  transition-all duration-300 hover:z-40',
        type && 'sm:w-80',
      ].join(' ')}
    />
  );
}
