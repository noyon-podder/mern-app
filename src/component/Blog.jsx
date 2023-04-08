import React from 'react'
import { Link } from 'react-router-dom'
import Subtitle from '../hooks/Subtitle'
import Title from '../hooks/Title'

const Blog = () => {
  return (
    
        <section className="bg-[#f3f3f3] my-10 md:my-20">
    <div class="container px-6 py-10 mx-auto">
        <div className='text-center'>
            <Subtitle>Our News & Stories</Subtitle>
            <Title>From The Blog</Title>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
                    <Link href="#" class="font-semibold text-gray-800 hover:underline  md:text-xl">
                        All the features you want to know
                    </Link>

                    <p class="mt-3 text-sm text-gray-500 md:text-sm">
                       Proactively deploy distributed communities whereas fully researched testing procedures. 
                       <br />
                       Professionally utilize enterprise-wide customer service whereas.
                    </p>

                    <p class="mt-3 text-sm text-blue-500">22 July 2023</p>
                </div>
            </div>

            <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
                    <Link href="#" class="font-semibold text-gray-800 hover:underline  md:text-xl">
                        How to use sticky note for problem solving
                    </Link>

                    <p class="mt-3 text-sm text-gray-500 md:text-sm">
                       Proactively deploy distributed communities whereas fully researched testing procedures. 
                       <br />
                       Professionally utilize enterprise-wide customer service whereas.
                    </p>

                    <p class="mt-3 text-sm text-blue-500">10 April 2023</p>
                </div>
            </div>
        </div>
    </div>
</section>
    
  )
}

export default Blog