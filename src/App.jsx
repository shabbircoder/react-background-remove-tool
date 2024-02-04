import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundRemoval from './components/BackgroundRemoval'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
      <BackgroundRemoval />
      </div>
      <div className=" mt-5 ">
      <Footer />
      </div>
    </div>
  )
}
