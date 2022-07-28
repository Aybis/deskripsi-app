import React from 'react';

export default function index({ item }) {
  return (
    <div
      className={[
        'relative w-full p-4 border-2  rounded-lg flex flex-col justify-center items-center max-h-full min-h-fit bg-white shadow-lg',

        item.status === 'Done' && 'border-blue-500 shadow-blue-500/20',
        item.status === 'Waiting' && 'border-red-500 shadow-red-500/20',
        item.status === 'On Progress' &&
          'border-yellow-500 shadow-yellow-500/20',
      ].join(' ')}>
      <h1 className="text-center text-lg font-medium leading-relaxed text-gray-800 tracking-wide">
        {item.title}
      </h1>
      <p className="text-center text-gray-400 font-light mt-2">"{item.note}"</p>
      <p className="text-center text-sm mt-4 text-gray-600">{item.pic}</p>
    </div>
  );
}
