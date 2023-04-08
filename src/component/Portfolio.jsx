import React from 'react'
import Subtitle from '../hooks/Subtitle';
import Title from '../hooks/Title';

const Portfolio = () => {
    
   
  return (
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto">
      <div className="text-center">
        <Subtitle>Our latest project</Subtitle>
        <Title>Our Portfolio</Title>
      </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 prot1">
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
              <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize ">
                Best website collections
              </h2>
              <p class="mt-2 text-lg tracking-wider text-black uppercase  ">
                Website
              </p>
            </div>
          </div>

          <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 prot4">
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
              <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize ">
                Block of Ui kit collections
              </h2>
              <p class="mt-2 text-lg tracking-wider text-black uppercase  ">
                Ui kit
              </p>
            </div>
          </div>

          <div
            class="flex items-end overflow-hidden bg-cover rounded-lg h-96 prot2"
            
          >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
              <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize ">
                Ton’s of mobile mockup
              </h2>
              <p class="mt-2 text-lg tracking-wider text-black uppercase  ">
                Mockups
              </p>
            </div>
          </div>

          <div
            class="flex items-end overflow-hidden bg-cover rounded-lg h-96 prot3"
            
          >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
              <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize ">
                Huge collection of animation
              </h2>
              <p class="mt-2 text-lg tracking-wider text-black uppercase  ">
                Animation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio