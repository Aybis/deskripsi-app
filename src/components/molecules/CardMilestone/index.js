import React from 'react';

export default function index({ item }) {
  return (
    <div
      className={[
        'relative w-full p-4 border border-gray-300  rounded-lg flex flex-col justify-between max-h-full min-h-fit ',
      ].join(' ')}>
      <h1 className="text-lg font-medium leading-relaxed text-gray-800 w-3/4">
        {item.title}
      </h1>
      <p className=" text-gray-500 font-light mt-2 pb-8">
        "{item.status === 'Done' ? 'Selesai Tepat Waktu' : item.note}"
      </p>
      <div className="py-3"></div>
      <div
        className={[
          'absolute top-3 right-3 leading-relaxed tracking-wide',
          item.status === 'Done' && 'bg-blue-500 text-white p-1 rounded ',
          item.status === 'Waiting' && 'bg-red-500 text-white p-1 rounded ',
          item.status === 'On Progress' &&
            'bg-yellow-500 text-white p-1 rounded  ',
        ].join(' ')}>
        <p className="text-xs">{item.status}</p>
      </div>
      <p className="text-sm font-light mt-4 text-gray-400 absolute left-3 bottom-2">
        {item.pic}
      </p>
    </div>
  );
}
