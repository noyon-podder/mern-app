import React from 'react'
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
const Hero = () => {
return (
  <section className="bg-white mt-10 relative">
    <div className="absolute left-72  animate-spin w-5 h-5">
      <img src={image1} alt="" />
    </div>
    <img
      src={image2}
      alt=""
      className="absolute bottom-44 left-80  animate-spin w-5 h-5"
    />
    <img
      src={image3}
      alt=""
      className="absolute right-1/4  top-10 animate-spin"
    />
    <img
      src={image4}
      alt=""
      className="absolute bottom-20 left-20  animate-ping w-5 h-5"
    />
    <img
      src={image3}
      alt=""
      className="absolute top-1/4  animate-spin"
    />
    <img
      src={image4}
      alt=""
      className="absolute top-20 left-44  animate-ping w-5 h-5"
    />
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-primary lg:text-4xl">
            Easiest way to create your website
          </h1>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-primary"
                fill="none "
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="mx-2">Personalized Matching</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="mx-2">JWide Variety Of Destinations</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="mx-2">Highly Qualified Service</span>
            </p>
          </div>
        </div>

        <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm  focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
          <form className="flex flex-col lg:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300  bg-primary rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
              Join Us
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full mx-auto rounded-xl lg:max-w-2xl"
          src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="photo"
        />
      </div>
    </div>
  </section>
);
}

export default Hero