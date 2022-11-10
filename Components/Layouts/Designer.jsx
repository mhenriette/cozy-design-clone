import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Designer() {
  return (
    <div className='relative overflow-hidden h-auto  '>
        <video
        autoPlay
        loop
        muted
        src='/video.mp4'
        className="absolute top-0 w-full object-cover h-full  " >
          

        </video>
        <div className='absolute top-0 h-full w-full bg-black bg-opacity-50'></div>
        <div className=' relative flex md:w-3/4 lg:w-auto max-w-[940px] items-center py-11 pl-11 pr-10 mx-auto flex-col lg:flex-row'>
            <Link href='/#' className='min-w-max'><Image src='/sandiego.svg' width='120' height='103' alt='sandiego' priority/></Link>
            <div className='lg:pl-28 '>
                <h1 className='text-lightsaturate font-Fraunces72ptsupersoft leading-[1.1em] text-5xl md:text-6xl mt-14 mb-12 font-bold '><em>Psst…&nbsp;</em><br></br>are you a designer? </h1>
                <p className='text-lightsaturate font-Fraunces72ptsupersoft mb-4 text-[20px] leading-[1.4em]'>Consider joining our 
                    <Link href="https://sddd.org/"  className='text-pink-700 font-bold leading-[1.5em]'>
                        San Diego Design Designers</Link> group. More than 700 people, we meet online via Slack and in person at social events around the city. It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design.</p>

            </div>
        </div>

    </div>
  )
}
