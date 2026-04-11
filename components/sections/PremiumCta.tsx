import React from 'react'
import PremiumFeatures from '../premium/PremiumFeatures'
import PremiumBanner from '../premium/PremiumBanner'

const isProduction = process.env.NODE_ENV === "production"

function PremiumCta() {
  return (
    <section style={
      {
        backgroundImage: isProduction ? "url('./premium-cta.avif')" : "url('/premium-cta.avif')"
      }
    } className="px-6 py-10 bg-black min-h-screen flex justify-center items-center relative">
      <div className='absolute top-0 w-full h-full bg-black/60' />
      <div className='space-y-2 z-10'>
        <PremiumFeatures />
        <PremiumBanner />
      </div>

    </section>
  )
}

export default PremiumCta