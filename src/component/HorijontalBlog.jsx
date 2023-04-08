import React from 'react'
import { Link } from 'react-router-dom'
import Subtitle from '../hooks/Subtitle'
import Title from '../hooks/Title'

const HorijontalBlog = () => {
  return (
    <section className="bg-[#f2f2f2] pb-10">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center mb-14">
            <Subtitle>Our Latest Blog</Subtitle>
            <Title>Recent Post</Title>
        </div>
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
                <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div>
                    <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>

                    <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 ">
                        What do you want to know about UI
                    </h1>

                    <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 ">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 className="text-blue-500 capitalize">Design instument</h3>

                    <Link href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
                        How to raise $100k+ by using blox ui kit on your design
                    </Link>
                </div>

                <hr className="my-6 border-gray-200 "/>

                <div>
                    <h3 className="text-blue-500 capitalize">UI Resource</h3>

                    <Link href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
                        Should you creat UI Product by using Blox?
                    </Link>
                </div>

                <hr className="my-6 border-gray-200 "/>

                <div>
                    <h3 className="text-blue-500 capitalize">Premium Collection</h3>

                    <Link href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
                        Top 10 Blocks you can get on Blox's collection.
                    </Link>
                </div>

                <hr className="my-6 border-gray-200 "/>

                <div>
                    <h3 className="text-blue-500 capitalize">Premium kits</h3>

                    <Link href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500  ">
                        Top 10 Ui kit you can get on Blox's collection.
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default HorijontalBlog