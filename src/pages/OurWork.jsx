import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../component/Portfolio';
import HorijontalBlog from '../component/HorijontalBlog';
import Features from '../component/Features';

const OurWork = () => {
  return (
    <>
      <div className="brade-cumb">
        <div class="flex items-center justify-center py-4 overflow-x-auto whitespace-nowrap z-50">
          <Link to="/" class="text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>

          <span class="mx-5 text-gray-100 ">/</span>

          <Link to="/about" class="text-primary hover:underline text-2xl">
            About
          </Link>
        </div>
      </div>
      <Portfolio/>
      <Features/>
      <HorijontalBlog/>
    </>
  );
}

export default OurWork