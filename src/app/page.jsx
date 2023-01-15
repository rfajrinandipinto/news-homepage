"use client"

import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  
  const toggleSideBar = () => {
      setSideBar(!sideBar);
  }
  
  return (
  
    <main className={inter.className + " bg-off-white relative"} >
    <div className="navbar">
      <nav>
        <div className="container px-4 mx-auto lg:px-20">
          <div className="flex justify-between py-8 lg:py-16">
            <div className="logo-icon flex items-center">
              <Link href="#" className="w-12 h-8 lg:w-16 lg:h-10 relative" >
                <Image src="/assets/images/logo.svg" fill></Image>
              </Link>
            </div>

            <div className="menu-nav flex ml-auto gap-10 w-0 lg:w-auto lg:visible invisible">
              <Link href="" className=" text-gray-500 font-semibold">Home</Link>
              <Link href="" className=" text-gray-500 font-semibold">New</Link>
              <Link href="" className=" text-gray-500 font-semibold">Popular</Link>
              <Link href="" className=" text-gray-500 font-semibold">Trending</Link>
              <Link href="" className=" text-gray-500 font-semibold">Categories</Link>
            </div>

            <div className="menu-icon flex items-center ">
              <div className="w-12 h-5 relative flex visible lg:invisible lg:w-0" onClick={toggleSideBar}>
                <Image src="/assets/images/icon-menu.svg" fill></Image>
              </div>
            </div>
          </div>
          
        </div>
        
      </nav>
    </div>

    <div className="main-article">
      <div className="container px-4 mx-auto lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-7">
          <div className="main lg:basis-2/3">
            <div className="flex relative w-full h-80 lg:hidden">
              <Image src="/assets/images/image-web-3-mobile.jpg" fill></Image>
            </div>
            <div className=" relative w-full h-80 hidden lg:flex">
              <Image src="/assets/images/image-web-3-desktop.jpg" fill></Image>
            </div>
            <div className="content flex flex-col gap-4 py-7 lg:flex-row">
              <h2 className=" font-extrabold text-5xl lg:text-6xl lg:basis-3/6">The Bright Future of Web 3.0?</h2>
              <div className="flex-col flex lg:basis-3/6">
                <p className="text-base text-gray-600 leading-7">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?</p>
                <div className="flex mt-6 lg:mt-8">
                  <button className=" bg-primary-red text-white font-bold text-base py-4 px-8 hover:bg-black" style={{letterSpacing: "0.25rem"}}> READ MORE</button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="side py-7 lg:basis-1/3 lg:py-0">
            <div className="content bg-very-dark-blue flex flex-col py-7 px-5">
              <h3 className="text-primary-orange text-4xl font-bold">New</h3>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2 py-9 border-b border-gray-100 ">
                  <h4 className="text-white font-extrabold text-xl hover:text-primary-orange cursor-pointer">Hydrogen VS Electric Cars</h4>
                  <p className="text-gray-300 leading-7">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="flex flex-col gap-2 py-9 border-b border-gray-100">
                  <h4 className="text-white font-extrabold text-xl hover:text-primary-orange cursor-pointer">The Downsides of AI Artistry</h4>
                  <p className="text-gray-300 leading-7">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="flex flex-col gap-2 pt-9">
                  <h4 className="text-white font-extrabold text-xl hover:text-primary-orange cursor-pointer">Is VC Funding Drying Up?</h4>
                  <p className="text-gray-300 leading-7">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="other-article mb-12">
      <div className="container px-4 py-12 mx-auto lg:px-20">
        <div className="flex flex-col gap-9 lg:flex-row">
          <div className="article flex gap-7 lg:basis-1/3">
            <div className="article-image relative flex w-28 h-36 basis-1/3">
              <Image src="/assets/images/image-retro-pcs.jpg" fill></Image>
            </div>
            <div className="article-content flex flex-col basis-2/3 gap-2">
              <p className="text-4xl font-bold text-gray-300">01</p>
              <h5 className="font-extrabold text-lg hover:text-primary-red cursor-pointer">Reviving Retro PCs</h5>
              <p className=" text-gray-600 leading-7">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="article flex gap-7 lg:basis-1/3">
            <div className="article-image relative flex w-28 h-36 basis-1/3">
              <Image src="/assets/images/image-top-laptops.jpg" fill></Image>
            </div>
            <div className="article-content flex flex-col basis-2/3 gap-2">
              <p className="text-4xl font-bold text-gray-300">02</p>
              <h5 className="font-extrabold text-lg hover:text-primary-red cursor-pointer">Top 10 Laptops of 2022</h5>
              <p className=" text-gray-600 leading-7">Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className="article flex gap-7 lg:basis-1/3">
            <div className="article-image relative flex w-28 h-36 basis-1/3">
              <Image src="/assets/images/image-gaming-growth.jpg" fill></Image>
            </div>
            <div className="article-content flex flex-col basis-2/3 gap-2">
              <p className="text-4xl font-bold text-gray-300">03</p>
              <h5 className="font-extrabold text-lg hover:text-primary-red cursor-pointer">The Growth of Gaming</h5>
              <p className=" text-gray-600 leading-7">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="sidebar ">
      <div className={`overlay bg-black bg-opacity-50 w-screen h-screen top-0 right-0 fixed ease-in-out duration-300  ${sideBar ? "visible" : "invisible"}`}></div>
      <div className={`sidebar-menu bg-off-white w-72 h-screen top-0 right-0 fixed flex flex-col py-8 px-8 ease-in-out duration-300 ${sideBar ? "translate-x-0 " : "translate-x-full"}`}>
        <div className="flex relative w-8 h-8 ml-auto" onClick={toggleSideBar}>
          <Image src="/assets/images/icon-menu-close.svg" fill></Image>
        </div>

        <div className="flex flex-col gap-7 my-24">
          <Link href="" className="text-xl">Home</Link>
          <Link href="" className="text-xl">New</Link>
          <Link href="" className="text-xl">Popular</Link>
          <Link href="" className="text-xl">Trending</Link>
          <Link href="" className="text-xl">Categories</Link>
        </div>
      </div>
    </div>
      
    </main>
  )
}
