import React from 'react'

const Banner = () => {
  return (
    <section className="bg-primary py-14 px-5 md:flex justify-between items-center">
      <div>
        <h2 className="text-white font-bold text-2xl ">
          GET SOLUTION FOR YOUR KICK ASS PROBLEM
        </h2>
        <p className='text-white font-semibold text-xl'>GET SOLUTION FOR YOUR KICK ASS PROBLEM</p>
      </div>
      <button className='about-message-button mt-7 md:mt-0'>Message Us</button>
    </section>
  );
}

export default Banner