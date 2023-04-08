import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper"; // Import Swiper styles
import "swiper/css";

const ClientSays = () => {

    const clientData = [
      {
        image:
          "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description:
          "Completely underwhelm economically sound web services through progressive content. Dynamically innovate low-risk high-yield channels without granular leadership. Dramatically re-engineer.",
        name: "Noyon Podder",
        title: "Marketing Manager at Stech",
      },
      {
        image:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description:
          "Completely underwhelm economically sound web services through progressive content. Dynamically innovate low-risk high-yield channels without granular leadership. Dramatically re-engineer.",
        name: "Sithi Kundu",
        title: "Hiring Manager at Stech",
      },
      {
        image:
          "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description:
          "Completely underwhelm economically sound web services through progressive content. Dynamically innovate low-risk high-yield channels without granular leadership. Dramatically re-engineer.",
        name: "Robber Gribs",
        title: "Senior Officer at Stech",
      },
      {
        image:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description:
          "Completely underwhelm economically sound web services through progressive content. Dynamically innovate low-risk high-yield channels without granular leadership. Dramatically re-engineer.",
        name: "Donald Trump",
        title: "CTO at Stech",
      },
    ];
    
  return (
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {clientData.map((data) => (
              <SwiperSlide>
                <div className="max-w-6xl">
                  <p class="flex items-center text-center text-gray-500 lg:mx-8">
                    {data.description}
                  </p>

                  <div class="flex flex-col items-center justify-center mt-8">
                    <img
                      class="object-cover rounded-full w-14 h-14"
                      src={data.image}
                      alt=""
                    />

                    <div class="mt-4 text-center">
                      <h1 class="font-semibold text-gray-800 ">{data.name}</h1>
                      <span class="text-sm text-gray-500">{data.title}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ClientSays
