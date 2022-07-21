import React from 'react';

export default function Index({ item, index, left = true, right = false }) {
  return (
    <div
      className={[
        'pt-24 pb-20 xl:px-20 p-4 gap-8 w-full flex justify-center items-center bg-gray-50 rounded-xl shadow-gray-200/40 transition-all duration-300',
        index % 2 === 0 && left ? 'flex-col-reverse' : 'flex-col',

        index % 2 !== 0 && right ? 'flex-col-reverse' : 'flex-col',
      ].join(' ')}
      key={index}>
      {/* Tagline and Header */}
      <div className="relative flex flex-col justify-center items-center">
        <p className="text-4xl leading-relaxed tracking-wider font-bold text-center text-gray-900 uppercase">
          {' '}
          {item.nama}
        </p>
        <p className="text-lg xl:text-xl text-center leading-relaxed tracking-wide xl:tracking-wider font-medium text-gray-700 -mt-0.5 mx-3 xl:mx-10">
          {item.tagline}
        </p>

        <p className="text-center font-light text-sm md:text-base leading-relaxed tracking-wide mt-8 text-gray-500">
          {item.deskripsi}
        </p>
      </div>

      <div className="relative flex flex-col max-h-fit gap-2 justify-center items-center">
        <img
          src={item.image}
          alt=""
          className="rounded object-cover object-center max-h-full max-w-full"
        />
        {item.note !== '' ? (
          <p className="text-sm font-light text-red-500 text-center">
            *diharuskan absensi terlebih dahulu untuk mengakses aplikasi ini.
          </p>
        ) : null}
      </div>
    </div>
  );
}
