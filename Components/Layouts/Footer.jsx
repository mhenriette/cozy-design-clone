import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Media from '../ui/Media'

export default function Footer() {
  return (
    <footer className='bg-lightsaturate'>
        <div className=' mx-auto px-6 container'>
          {/* section 1 */}
          <div className='flex flex-col justify-center items-center py-12'>
            {/* logo */}
          <div className='px-4 py-8'> <Image src='/logodark.svg' alt='logodark' width='73' height='50' /></div>
             <nav className=''>
                <Link href='/About' className='itemlink'><p>About</p></Link>
                <Link href='/About' className='itemlink'><p>Services</p></Link>
                <Link href='/About' className='itemlink'><p>Work</p></Link>
                <Link href='/About' className='itemlink'><p>Blog</p></Link>
                <Link href='/About' className='itemlink'><p>Contact</p></Link>
            </nav>
          
        
            <div className='flex flex-col items-center gap-4 mt-8'>
                  {/* san diego */}
              <div className='flex '>
                  <Image alt='diego' width='20' height='20' src='/diego.webp'/>
                  <p className='text-sm font-Fraunces72ptsupersoft ml-3 text-[#d90f54]'>San Diego Digital Designers</p>
              </div>
              <nav className='flex '>
                <Media Img='/twit.svg' style='bg-[#1da1f2]' url='/#'/>
                <Media Img='/in.svg' style='bg-[#2977c9]' url='/#'/>
                <Media Img='/fb.svg' style='bg-[#4267b2]' url='/#'/>
                <Media Img='/insta.svg' style='bg-[#e4405f]' url='/#'/>
                <Media Img='/youtube.svg' style='bg-[#c4302b]' url='/#'/>
                <Media Img='/clut.svg' style='bg-[#16313a]' url='/#'/>
                <Media Img='/mes.svg' style='bg-[#223240]' url='/#'/>
              </nav>
            </div>
            </div>
            {/* section 2 */}
            <div className='mx-3 mt-6 py-5 border-t-2 border-shadedpink '>
              <div className='py-3 grid grid-cols-2 grid-rows-2 gap-8 '>
                  <div className='flex flex-col items-center h-full justify-end'>
                      <Image src='/logo5.svg'
                        width='140'
                        height='53'
                        alt='logo5'
                        priority
                      />
                      <p className='text-darkblue font-Fraunces72ptsupersoft text-sm font-bold'>BBB rating: A+</p>
                  </div>
                  <Image src='/bureau.png' alt='bureau' width='140' height='74' priority/>
                  {/* <div className=' flex flex-col w-full items-center justify-center'> */}
               
                      <div className='row-start-2 row-end-3 ml-4  col-start-1 col-end-3 bg-white rounded-tr-[25px] rounded-bl-[25px] overflow-hidden flex items-center pr-5 w-52 h-[50px] '>
 
                      <div className='aspect-square flex items-center justify-center h-full relative  bg-darkblue rounded-tr-[25px]'>

                      <Image className='' alt='c icon' src='/clut.svg' width={25} height={25}/>
                      </div>
                      <div className='flex flex-col w-full items-center justify-center'>
                      <div className='flex gap-2 items-center justify-center'>
                        <p className='text-darkblue text-lg '>5.0</p>
                        <Link href='/'>
                        <ul className='flex gap-1'>
                        {[1,1,1,1,1].map((_,index)=><li key={index}><Image alt='icons'  className='' src='/star.svg' width={16} height={16}/></li>)}
                        </ul></Link>
                      </div>
                        <Link href='/' className='text-[8px] tracking-[-.2px] mt-1 whitespace-nowrap text-dark-600 hover:underline '>Based on 16 Clutch reviews</Link>
                      </div>
                      </div>
                      {/* </div> */}

              </div>
              <div>
                <p></p>
              </div>

            </div>
        </div>
    </footer>
  )
}
