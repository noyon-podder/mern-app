import React from 'react'
import Hero from '../component/Hero'
import Work from '../component/Work'
import Features from '../component/Features'
import Blog from '../component/Blog'
import Team from '../component/Team'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Work/>
        <Features/>
        <Team/>
        <Blog/>
    </div>
  )
}

export default Home