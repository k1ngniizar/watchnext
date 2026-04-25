import React from 'react'
const isProduction = process.env.NODE_ENV === "production"

function Contact() {
  return (
    <section style={
      {
        backgroundImage: isProduction ? "url('./premium-cta.avif')" : "url('/premium-cta.avif')"
      }
    } className="px-6 py-10 min-h-[50vh] flex justify-center items-center relative">
      <div className='absolute top-0 w-full h-full bg-black/60' />
      <div className='flex flex-col gap-4 bg-gray-900/80 backdrop-blur-xs max-w-lg w-full rounded-lg text-white p-6 z-10'>
        <h2 className='font-bold uppercase w-fit mx-auto'>Enter your email to get started</h2>
        <div className=' border-2 h-10 rounded-sm flex items-center justify-center'>
          <div className='h-full px-4 bg-gray-600 flex items-center justify-center'>
            <label htmlFor="email" className='font-bold text-lg'>Email</label>
          </div>
          <input id='email' type="email" className='border-l-2 h-full rounded-r-sm flex-1 focus:outline-blue-200' />
        </div>
        <button className="bg-white text-black max-w-sm mx-auto px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">Get Started</button>
      </div>
    </section >
  )
}

export default Contact