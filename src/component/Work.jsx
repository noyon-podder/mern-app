import React from 'react'
import Subtitle from '../hooks/Subtitle'
import Title from '../hooks/Title';
import { IoDiamondSharp, IoInvertModeOutline, IoMegaphoneOutline } from "react-icons/io5";

const Work = () => {
    const servicesData = [
      {
        icon: <IoInvertModeOutline />,
        title: "Web Design",
        message:
          "Progressively promote cross-platform innovation without go forward services. Authoritatively generate covalent total linkage and frictionless intellectual capital.",
      },
      {
        icon: <IoMegaphoneOutline />,
        title: "Web Development",
        message:
          "Progressively promote cross-platform innovation without go forward services. Authoritatively generate covalent total linkage and frictionless intellectual capital.",
      },
      {
        icon: <IoDiamondSharp />,
        title: "E-Commerce solution",
        message:
          "Progressively promote cross-platform innovation without go forward services. Authoritatively generate covalent total linkage and frictionless intellectual capital.",
      },
    ];
  return (
    <div className='py-10 md:py-20'>
      <div className='text-center'>
        <Subtitle>what we provide</Subtitle>
        <Title>Our Best Services</Title>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14'>
        {servicesData.map(data => <div className='shadow-md p-8  border'>
            <span className='text-4xl mb-4 text-primary'>{data.icon}</span>
            <h1 className='text-xl font-bold text-gray-800 my-4'>{data.title}</h1>
            <p className='text-gray-500'>{data.message}</p>
        </div>)}
      </div>
    </div>
  );
}

export default Work