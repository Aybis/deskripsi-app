import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArchiveIcon as ArchiveActive,
  HomeIcon as HomeActive,
  UserGroupIcon as TeamActive,
} from '@heroicons/react/solid';
import { ArchiveIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/outline';

export default function MenuMobile() {
  const location = useLocation();
  const routes = [
    {
      path: '/',
      name: 'Home',
      icon: HomeIcon,
      iconActive: HomeActive,
    },
    {
      path: '/team',
      name: 'Our Team',
      icon: UserGroupIcon,
      iconActive: TeamActive,
    },
    {
      path: '/milestone',
      name: 'Milestone',
      icon: ArchiveIcon,
      iconActive: ArchiveActive,
    },
  ];
  return (
    <div className="fixed bottom-0 z-40 inset-x-0 sm:hidden">
      <div className="relative bg-gray-900 p-4 flex justify-evenly items-center">
        {routes.map((item, index) => (
          <Link
            to={item.path}
            className={[
              'relative flex flex-col justify-center items-center gap-1 group hover:text-blue-400 transition-all duration-300 cursor-pointer',
              location.pathname === item.path
                ? 'text-gray-50'
                : 'text-gray-600',
            ].join(' ')}
            key={index}>
            {location.pathname === item.path ? (
              <item.iconActive className="h-6" />
            ) : (
              <item.icon className="h-6" />
            )}
            <p
              className={[
                'text-sm leading-relaxed tracking-wide group-hover:font-normal',
                location.pathname === item.path
                  ? 'font-normal'
                  : 'font-light tracking-wider',
              ].join(' ')}>
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
