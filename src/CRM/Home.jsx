import React from 'react'
import HeroSection from './HeroSection'
import Dashboard from './Dashboard'
import TopTraders from './TopTraders'
import StockDashboard from './StockDashboard'

const Home = () => {
  return (
    <>
    <HeroSection />
    <Dashboard />
    <TopTraders />
    <StockDashboard />
    </>
  )
}

export default Home