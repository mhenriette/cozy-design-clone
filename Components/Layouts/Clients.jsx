import React from 'react'
import Image from 'next/image'

export default function Clients() {
  return (
    <div className='bg-lightsaturate py-32  '>
      <div className='mx-auto container px-5 w-full '>
        <div className='flex justify-center flex-col items-center mb-11 px-2'>
            <p className=' text-lg md:text-7xl mt-16 mb-11 font-semibold text-center  font-Fraunces72ptsupersoft text-darkblue'>❤️ from our clients</p>
          <div className='bg-shadedpink w-14 h-2 mb-6 mt-5 self-center'></div>
        </div>
        {/* cards */}
        <div className='flex flex-col md:grid-cols-2 md:grid md:items-end lg:w-3/5 mx-auto relative'>
          {/* message icon */}
          <div className='textbox hidden md:block '>
            
          
            <div className='bg-transparent border border-lightsaturate  w-36 h-36 m-6  rounded-full relative flex justify-center items-center  '>
              
            <div className='bg-transparent border border-lightsaturate w-28 h-28 p-3 m-3  rounded-full  '>
              <div className='relative'>
            <Image src='/sms.svg' alt='sms' width='80' height='80' className='p-5 bg-lightsaturate  rounded-full absolute left-0 right-0 top-0 bottom-0'/>
            </div>

            </div>
            </div>
           
          </div>
          
          <div className='mb-4 w-full '>
          <div className='bg-darkblue bg-primary bg-50 pr-10 pl-14 box-border shadow-primary flex flex-col p-20 m-3 rounded-t-[80%] rounded-bl-[100%]'>
            <Image
            alt='susie'
            width='80'
            height='80'
            src='/susie.webp'
            priority
            className='mb-6 border-[3px] border-solid border-[#fff] rounded-[32%] mix-blend-luminosity self-center '
              
            />
            <h5 className='text-right font-semibold font-Fraunces72ptsupersoft text-shadedpink text-[20px] mt-6 mb-3'>“One of the top design professionals…”</h5>
            <p className='text-[18px] font-Fraunces72ptsupersoft text-lightsaturate mb-[15px] text-right'>I connect with hundreds of talented folks on a regular basis, and I can say with complete confidence that Lee is one of the best UX designers in Aquent/Vitamin T&apos;s global network.</p>
            <div className='font-Geomanist text-xs uppercase text-lightsaturate text-right'>Susie Pollasky</div>
            <div className='font-Geomanist text-xs text-lightsaturate mt-2 text-right'>Now: Leadership Recruiting @ Product Design <br></br>at Facebook</div>

          </div>
          </div>
          <div className='mb-4 w-full '>
          <div className='bg-[#2d4850] bg-primary bg-50 pr-10 pl-14 box-border shadow-secondary flex flex-col p-20 m-3  rounded-t-[100%] rounded-br-[50%]'>
            <Image
            alt='martin'
            width='80'
            height='80'
            src='/martin.webp'
            priority
            className='mb-6 border-[3px] border-solid border-[#fff] rounded-[32%] mix-blend-luminosity self-center '
              
            />
            <h5 className='text-left font-semibold font-Fraunces72ptsupersoft text-shadedpink text-[20px] mt-6 mb-3'>“They’re a very well-rounded organization…”</h5>
            <p className='text-[18px] font-Fraunces72ptsupersoft text-lightsaturate mb-[15px] text-left'>Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased.</p>
            <div className='font-Geomanist text-xs uppercase text-lightsaturate text-left'>Martin Spritzer</div>
            <div className='font-Geomanist text-xs text-lightsaturate mt-2 text-left'>General Manager @ iQuoteXpress</div>

          </div>
          </div>
          <div className='mb-4 w-full self-start'>
          <div className='bg-lightorange bg-50 bg-primary pr-10 pl-14 box-border shadow-orange flex flex-col p-20 m-3  rounded-tl-[100%] rounded-b-[60%]'>
            <Image
            alt='eric'
            width='80'
            height='80'
            src='/eric.webp'
            priority
            className='mb-6 border-[3px] border-solid border-[#fff] rounded-[32%] mix-blend-luminosity self-end '
              
            />
            <h5 className='text-right font-semibold font-Fraunces72ptsupersoft text-white text-[20px] mt-6 mb-3'>“They&apos;re just good people.”</h5>
            <p className='text-[18px] font-Fraunces72ptsupersoft text-white mb-[15px] text-right'>They were a pleasure to work with and I&apos;m really happy with the results. They pretty much nailed it.</p>
            <div className='font-Geomanist text-xs uppercase text-white text-right'>Eric weiss</div>
            <div className='font-Geomanist text-xs text-lightsaturate mt-2 text-right'>Founder @ Full Cycle Product Development</div>

          </div>
          </div>
          <div className='mb-4 w-full'>
          <div className='bg-shadedorange bg-50 bg-primary pr-10 pl-14 box-border shadow-light flex flex-col p-20 m-3  rounded-tr-[100%] rounded-b-[60%]'>
            <Image
            alt='michael'
            width='80'
            height='80'
            src='/michael.webp'
            priority
            className='mb-6 border-[3px] border-solid border-[#fff] rounded-[32%] mix-blend-luminosity self-start '
              
            />
            <h5 className='text-left font-semibold font-Fraunces72ptsupersoft text-white text-[20px] mt-6 mb-3'>“The project was successful”</h5>
            <p className='text-[18px] font-Fraunces72ptsupersoft text-white mb-[15px] text-left'>They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional.</p>
            <div className='font-Geomanist text-xs uppercase text-white text-left'>Michael Weisfeld</div>
            <div className='font-Geomanist text-xs text-lightsaturate mt-2 text-left'>Director of Digital Marketing @ National Funding</div>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
