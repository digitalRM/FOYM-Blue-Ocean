import React from 'react'
import { Button } from '../ui/button'
import Header from '../ui/1 - header'

export default function Hero() {
  return (
    <div className="relative h-[800px] lg:h-[1000px] overflow-hidden bg-[url('/backgroundIMG.svg')] bg-cover bg-no-repeat 2xl:bg-bottom bg-bottom">
      <div className="mx-auto max-w-[1040px] overflow-hidden px-6 pt-6 lg:pt-10 lg:px-8 relative">
        <Header />
        <div className="flex flex-col lg:flex-row items-center justify-between mt-36 lg:mt-56 z-10 relative">
          <div className=" mx-auto flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter text-center"><span className="text-blue-600">Our Oceans</span> Need You.</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter text-center">Help Us <span className="text-blue-600">Save Them.</span></h1>
            <p className="text-lg max-w-[640px] text-neutral-600 text-center mt-6">Oceans are the lifeblood of our planet and they are in danger. We need your help to save them from pollution, overfishing, and climate change.</p>
            <div className="flex gap-4 mt-6 justify-center md:mx-36 flex-col md:flex-row">
              <Button className="w-full bg-blue-600 hover:bg-blue-500">Donate</Button>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
