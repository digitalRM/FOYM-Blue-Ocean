import React from 'react'

export default function OurSolution() {
  return (
    <div className="relative overflow-hidden -mt-1 text-white w-full bg-[url('/topImage.svg')] sm:bg-contain  bg-no-repeat ">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 -mb-12">
        <div className='relative'>
          <div className="lg: top-0 left-0 w-full h-full z-0 grid lg:grid-cols-2 scale-105 pb-24 lg:pb-0">
            <img src="https://images.unsplash.com/photo-1576436445430-43d6d7c9aea5?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="aspect-video rounded-lg border-4 border-neutral-400/50 lg:-rotate-3 lg:-translate-x-4 lg:translate-y-8 lg:scale-110 lg:h-56 lg:aspect-square" />
            <img src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="aspect-video absolute lg:relative translate-x-12 md:translate-x-24rounded-lg translate-y-6 md:translate-y-12 border-4 border-neutral-400/50 lg:rotate-3 lg:-translate-x-12 lg:translate-y-12 lg:scale-110 lg:h-56 lg:aspect-square" />
            <img src="https://images.unsplash.com/photo-1582623838120-455da222cdc7?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="aspect-video lg:aspect-[] absolute lg:relative translate-x-24 md:translate-x-48 translate-y-12 md:translate-y-24 rounded-lg border-4 border-neutral-400/50 lg:rotate-3 lg:translate-x-24 lg:-translate-y-8 lg:scale-125 lg:h-48" />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl text-black font-semibold tracking-tighter">Our Solution</h2>
            <p className="text-lg mt-4 tracking-tight text-neutral-600">At Blue Ocean, we believe that everyone has a role to play in protecting our oceans. That's why we're working to raise awareness about the threats facing our oceans and to inspire people to take action to protect them.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-600">We're also working to support organizations that are working to protect our oceans. We provide funding and resources to help them carry out their important work, and we're always looking for new ways to support their efforts.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-600">Together, we can make a difference. Join us in our mission to protect our oceans and the creatures that call them home.</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
