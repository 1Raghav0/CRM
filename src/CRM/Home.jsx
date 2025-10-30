import React from 'react'
import HeroSection from './HeroSection'
import Dashboard from './Dashboard'
import TopTraders from './TopTraders'
import StockDashboard from './StockDashboard'

const Home = () => {
  return (
    <>
    <div className='px-4 md:px-16 lg:px-24'>
      <HeroSection />
    <Dashboard />
    <TopTraders />
    <StockDashboard />
    </div>
    </>
  )
}

export default Home