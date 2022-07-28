import React from 'react';
import { CardImage } from '..';

export default function index({ image, data }) {
  return (
    <div className="relative">
      {/* Image */}
      <div className="relative group hover:z-30">
        <CardImage image={image} />
      </div>
      {/* Data Diri */}
      <div className="relative p-3">
        <h1 className="text-base font-semibold tracking-wide leading-relaxed text-gray-800 uppercase">
          {data.nama} - {data.nik}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">{data.posisi}</p>
      </div>
    </div>
  );
}
