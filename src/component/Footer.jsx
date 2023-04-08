import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl ">
              Subscribe our newsletter to get update.
            </h1>

            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-primary rounded-lg gap-x-3 hover:bg-orange-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Sign Up Now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-800 ">Quick Link</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Who We Are
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 ">Industries</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  href="#"
                  className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Information Technology
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 ">Services</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500">
                  Translation
                </Link>
                <Link className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500">
                  Proofreading & Editing
                </Link>
                <Link className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500">
                  Content Creation
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 ">Contact Us</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500">
                  +880 1752441505
                </Link>
                <Link className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500">
                  noyon.podder7@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Link>
              <img className="w-auto h-7" src={logo} alt="" />
            </Link>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              © Copyright 2021. All Rights Reserved by Noyon Podder
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer