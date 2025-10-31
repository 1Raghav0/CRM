import React from 'react'
import CryptoHeroSection from './CryptoHeroSection'
import FilterSection from './FilterSection'
import TrendingAssets from './TrendingAssets'

const Marketing = () => {
  return (
    <>
    <div className='px-4 md:px-8 lg:px-16'>
    <CryptoHeroSection />
    <FilterSection />
    <TrendingAssets />
    </div>
    </>
  )
}

export default Marketing