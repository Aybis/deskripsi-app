import { ArrowNarrowUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import MenuMobile from './MenuMobile';

export default function Layout({ children }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const handlerButtonToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="relative min-h-screen max-h-full max-w-full">
      <Header />
      <MenuMobile />
      <Main>{children}</Main>

      <Footer />
      {/* Button go to top */}
      {visible && (
        <div className="max-w-md mx-auto relative container">
          <div
            onClick={() => handlerButtonToUp()}
            className="group hover:scale-110 hover:shadow-lg shadow-gray-900/50 fixed right-10 z-20 bottom-20 bg-gray-900 rounded-full p-2 cursor-pointer hover:bg-gray-800 transition-all duration-300 ">
            <ArrowNarrowUpIcon className="h-5 lg:h-8  text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
