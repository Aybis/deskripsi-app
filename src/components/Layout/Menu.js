import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Menu({ visible }) {
  const location = useLocation();
  const routes = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/team',
      name: 'Our Team',
    },
    {
      path: '/milestone',
      name: 'Milestone',
    },
  ];
  return (
    <div className="relative hidden md:flex items-end">
      <ul className="relative flex gap-4">
        {routes.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={[
                'text-base font-normal text-gray-100 leading-relaxed tracking-wide cursor-pointer pb-1 border-b-2 transition-all duration-300 uppercase',
                visible
                  ? 'text-gray-900  hover:border-gray-800'
                  : 'text-gray-100  hover:border-gray-200',

                location.pathname === item.path
                  ? ` ${
                      visible
                        ? 'border-gray-800 text-gray-800'
                        : 'border-gray-200'
                    }`
                  : 'border-transparent bg-none',
              ].join(' ')}
              key={index}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
