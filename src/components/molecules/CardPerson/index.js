import React from 'react';
import { CardImage } from '..';

export default function index({ image, data, handlerClick }) {
  return (
    <div className="relative">
      {/* Image */}
      <div className="relative group hover:z-30">
        <CardImage handlerClick={handlerClick} image={image} />
      </div>
      {/* Data Diri */}
      <div className="relative p-3">
        <h1 className="text-base font-semibold tracking-wide leading-relaxed text-gray-800 uppercase">
          {data.nama} - {data.nik}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed uppercase">
          {data.posisi}
        </p>
      </div>
    </div>
  );
}
