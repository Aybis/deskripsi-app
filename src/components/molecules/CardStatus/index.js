import React from 'react';

export default function index() {
  return (
    <div className="relative mt-2">
      <h1 className="text-sm leading-relaxed font-medium text-gray-600 text-center">
        Status :
      </h1>
      <div className="relative flex mt-1 items-center gap-5">
        <div className="relative flex items-center gap-2">
          <div className="h-4 w-4 bg-blue-500 rounded"></div>
          <p className="text-sm leading-relaxed text-gray-500">Done</p>
        </div>
        <div className="relative flex items-center gap-2">
          <div className="h-4 w-4 bg-yellow-500 rounded"></div>
          <p className="text-sm leading-relaxed text-gray-500">On Progress</p>
        </div>
        <div className="relative flex items-center gap-2">
          <div className="h-4 w-4 bg-red-500 rounded"></div>
          <p className="text-sm leading-relaxed text-gray-500">Waiting</p>
        </div>
      </div>
    </div>
  );
}
