import React from 'react'

export default function TheProblem() {
  return (
    <div className="relative overflow-hidden bg-blue-600 -mt-2 lg:-mt-24 pb-10 text-white w-full">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid lg:grid-cols-2 gap-12 -mb-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter">What&apos;s the problem?</h2>
            <p className="text-lg mt-4 tracking-tight text-neutral-100">Oceans are the lifeblood of our planet. They cover over 70% of the Earth&apos;s surface and are home to millions of species of plants and animals. But our oceans are in danger. Pollution, overfishing, and climate change are threatening the health of our oceans and the creatures that live in them.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-100">Plastic pollution is one of the biggest threats to our oceans. Every year, millions of tons of plastic waste end up in the ocean, where it can harm marine life and pollute the water. Overfishing is another major problem. Many fish populations are being overfished, leading to a decline in their numbers and threatening the health of the ocean ecosystem.</p>
          </div>
          
        </div>

        <div className='relative pb-24 lg:pb-0 '>
          <div className="relative w-full h-full z-10 grid lg:grid-cols-2 lg:scale-105">
            <img src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="aspect-video lg:aspect-[] rounded-lg border-4 border-white/50 lg:-rotate-3 lg:translate-x-4 lg:translate-y-8 lg:scale-110" />
            <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="aspect-video lg:aspect-[] absolute lg:relative translate-x-12 md:translate-x-24 translate-y-6 md:translate-y-12 rounded-lg border-4 border-white/50 lg:rotate-3 lg:translate-x-4 lg:translate-y-12 lg:scale-110" />
            <img src="https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ocean" className="aspect-video lg:aspect-[] absolute lg:relative translate-x-24 md:translate-x-48 translate-y-12 md:translate-y-24 lg:translate-y-0 rounded-lg border-4 border-white/50 lg:rotate-3 lg:translate-x-32 lg:scale-125" />
            
          </div>
        </div>
      </div>
    </div>
  )
}
