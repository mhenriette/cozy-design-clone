import React from 'react'
import Buttons from '../ui/Buttons'

export default function HeroSection() {
  return (
  <div className='bg-gradient-to-r from-redblue to-darkblue overflow-y-hidden  '>
    <div className=' md:relative mx-auto px-12 container md:flex items-end md:gap-20 overflow-hidden '>
      
        <div className=' mb-[1.875rem] md:w-1/2 self-start md:mb-0 '>
          <h1 className='text-start pt-[0.625rem]  pb-[0.625rem] mb-[1.25rem] text-transparent  bg-clip-text bg-opacity-95  bg-shadedpink bg-shaded  text-[3.75rem] leading-[1.1em]  font-Fraunces144ptsupersoft font-bold md:text-8xl  md:mt-20 md:mb-5'>
            Your design team for the cost of a <br></br> salary.
          </h1>
          
          <h4 className='font-Fraunces72ptsupersoft bg-lightsaturate bg-clip-text text-transparent bg-shaded bg-opacity-70 font-semibold mt-[1.25rem] mb-[1.25rem] text-start py-[0.625rem] leading-[1.3em]  text-[1.875rem] md:text-[40px]'>Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don&apos;t?</h4>

          <Buttons text={`See how we \n work & what we can \n do`} style='leading-[1.1em] tracking-[2px] my-5  md:mb-[-10px] md:py-8 md:px-0 md:mb-0'/>
         
        </div>
       
         
     
      <div className=' items-center mt-[60px] mb-[-60px] w-[334px] md:w-1/2   mr-[-80px] bottom-0  md:transform md:scale-110 md:pb-20' ><img src='/cozyimg.png'/></div>
  </div>
  </div>
   
  )
}
