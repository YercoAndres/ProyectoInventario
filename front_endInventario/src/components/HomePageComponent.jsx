import React from 'react'

export default function HomePageComponent() {
  return (
   <>
   
        <div class="h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        
        <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
            <div class="col-span-6">
            <span class="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
            <h1 class="text-white font-extrabold text-5xl mb-8">Finpoint provides Financial Consulting in different ways</h1>
            <p class="text-stone-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
            </div>
        </div>
        </div>
        <div class="bg-[#f7d0b6] py-20">
        <div class="max-w-screen-lg mx-auto flex justify-between items-center">
            <div class="max-w-xl">
            <h2 class="font-black text-sky-950 text-3xl mb-4">As the leading experts in this field, we're in over 90 countries</h2>
            <p class="text-base text-sky-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button class="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10">Get started</button>
        </div>
        </div>


        <div class="py-12 relative overflow-hidden bg-white">
        <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
            <div class="w-full flex flex-col items-end pr-16">
            <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance</h2>
            <div class="h-full mt-auto overflow-hidden relative">
            </div>
            </div>

            <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div class="relative z-20 pl-12">
                <h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">Finpoint is here to help you</h2>
                <p class="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
                </p>
                <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
            </div>
            </div>
        </div>
        </div>
   </>
  )
}
