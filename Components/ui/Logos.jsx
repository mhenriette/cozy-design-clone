import React from 'react'
import Image from 'next/image'

export default function Logos() {
  return (
    <div className='flex items-center flex-col md:flex-row md:gap-20 lg:gap-0'>
           <div className='grid  grid-rows-4 gap-8 px-5'>
              <Image src='/logo1.webp'
                width='140'
                height='140'
                alt='logo1'
                priority

              />
               <Image src='/logo2.webp'
                width='160'
                height='140'
                alt='logo2'
                priority
              />
               <Image src='/logo3.webp'
                width='140'
                height='140'
                alt='logo3'
                priority
              />
               <Image src='/logo4.webp'
                width='140'
                height='140'
                alt='logo4'
                priority
              />
              </div>
              <div className='grid grid-rows-5 gap-9 px-5'>
                <div className='flex flex-col items-center h-full justify-end'>
                  <Image src='/logo5.svg'
                    width='140'
                    height='53'
                    alt='logo5'
                    priority
                  />
                  <p className='text-darkblue font-Fraunces72ptsupersoft text-sm font-bold'>BBB rating: A+</p>
              </div>
               <Image src='/logo6.webp'
                width='140'
                height='140'
                alt='logo6'
                priority
              />
               <Image src='/logo7.png'
                width='120'
                height='166'
                alt='logo7'
                priority
              />
               <Image src='/logo8.png'
                width='140'
                height='140'
                alt='logo8'
                priority
              />
               <Image src='/logo9.webp'
                width='150'
                height='67'
                alt='logo9'
                priority
              />
              </div>

           
    </div>
  )
}
