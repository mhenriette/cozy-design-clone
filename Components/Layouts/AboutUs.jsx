import React from 'react'
import Buttons from '../ui/Buttons'
import Logos from '../ui/Logos'

export default function AboutUs() {
  return (
    <div className='bg-shaded bg-shadedpink bg-opacity-50  '>
        <div className='mx-auto container  lg:px-32 py-24 flex flex-col lg:flex-row items-center drive '>
          <div className='pl-[10vw] max-w-[800px] my-28 pr-[30px] '>
            <div><p className='mb-[16px] text-darkblue text-[30px] font-Geomanist'>🌴🐻🇺🇸</p></div>
            <h1 className='text-darkblue font-Fraunces72ptsupersoft text-[70px] font-bold  mt-[40px] mb-[10px] '>Get Cozy</h1>
            <h3 className='text-lightorange font-Fraunces72ptsupersoft text-[37px]'>Design &amp;&nbsp;digital marketing <br></br> in San Diego, California</h3>
            <p className='text-darkblue text-[22px] font-Fraunces72ptsupersoft mt-10 mb-3 leading-[1.6em] '>We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯</p>
            <p className='text-darkblue text-[22px] font-Fraunces72ptsupersoft mt-10 mb-3 leading-[1.6em] opacity-1 '>No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
            <Buttons text={`WHY WE DO WHAT \n WE DO`} style='text-[20px] py-6'/>

          </div>
          <div className=''>
          <Logos/>
          </div>

        </div>
       
    </div>
  )
}
