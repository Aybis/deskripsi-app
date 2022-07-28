import React from 'react';
import logo from '../../assets/images/pins.png';
import Menu from './Menu';

export default function Header({ visible }) {
  return (
    <div
      className={[
        'hidden sm:block sticky z-10 inset-x-0 top-0 transform  backdrop-blur-md transition-all duration-300',

        visible ? 'bg-none border-b-2 border-gray-200' : 'bg-gray-900',
      ].join(' ')}>
      <div className="relative mx-auto container px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative flex gap-2">
            <img src={logo} alt="" className="h-14" />
          </div>

          {/* Menu */}
          <Menu visible={visible} />
        </div>
      </div>
    </div>
  );
}
