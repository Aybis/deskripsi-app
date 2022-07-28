import React from 'react';

export default function Main({ children }) {
  return (
    <div className="relative mt-8 pb-28">
      <div className="relative mx-auto container md:p-4">{children}</div>
    </div>
  );
}
