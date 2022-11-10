import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Media from '../ui/Media'

export default function Footer() {
  return (
    <footer>
        <div>
            {/* logo */}
           <Image src='/logodark.svg' alt='logodark' width='73' height='50'/>
            <nav className=''>
                <Link href='/About' className='itemlink'><p>About</p></Link>
                <Link href='/About' className='itemlink'><p>Services</p></Link>
                <Link href='/About' className='itemlink'><p>Work</p></Link>
                <Link href='/About' className='itemlink'><p>Blog</p></Link>
                <Link href='/About' className='itemlink'><p>Contact</p></Link>
            </nav>
        
            <div>
                  {/* san diego */}
              <div className='flex'>
                  <Image alt='diego' width='20' height='20' src='/diego.webp'/>
                  <p className='text-sm font-Fraunces72ptsupersoft ml-3 text-[#d90f54]'>San Diego Digital Designers</p>
              </div>
              <nav>
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
    </footer>
  )
}
