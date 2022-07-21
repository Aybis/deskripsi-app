import {
  ClipboardIcon,
  PaperAirplaneIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import React from 'react';

export default function Index({ item, index, left = true, right = false }) {
  return (
    <div className="pt-24 pb-20 xl:px-20 p-4 w-full bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 bg-opacity-70 rounded-xl shadow-gray-200/40 ">
      <div
        className={[
          'flex justify-center items-center transition-all duration-300 p-4 gap-8',
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
      <div className="relative flex justify-center items-center gap-5 mt-8">
        <div className="group border border-gray-500 px-4 py-1.5 rounded-md text-base leading-relaxed text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer hover:border-gray-900 hover:shadow-lg shadow-gray-900/40 flex gap-1.5 items-center">
          <PaperAirplaneIcon className="h-4 transform rotate-45 group-hover:animate-bounce group-hover:transform group-hover:rotate-45 transition-all duration-300" />
          Go to App
        </div>
        <div className="group border border-gray-500 px-4 py-1.5 rounded-md text-base leading-relaxed text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer hover:border-gray-900 hover:shadow-lg shadow-gray-900/40 flex gap-1.5 items-center">
          <ClipboardIcon className="h-4 group-hover:animate-bounce transition-all duration-300" />
          Guidance
        </div>
      </div>
    </div>
  );
}
