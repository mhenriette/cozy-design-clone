import React from 'react'
import Link from 'next/link'

export default function NavBar({style}) {
  return (
    <header className={`bg-gradient-to-r from-darkblue to-redblue z-50  ${style}`}>
        <div className='mx-auto container px-12 flex justify-center lg:justify-between items-center '>
            {/* logo */}
            <div className='py-[1.25rem] px-[0.9375rem]'>
                <Link href='/' ><img src='/logo.svg' alt='logo' className='w-[6.25rem] '/></Link>
            </div>
            <nav className='hidden lg:flex '>
                <Link href='/#' className='listitem'><p>Get Cozy</p></Link>
                <Link href='/#'  className='listitem'><p>What we Do</p></Link>
                <Link href='/#'  className='listitem'><p>Our Work</p></Link>
                <Link href='/#'  className='listitem'><p>The Blog</p></Link>
                <Link href='/#'  className='listitem'><p>Say Hi</p></Link>
         
            </nav>
            {/* <div><FontAwesomeIcon icon="fa-solid fa-bars" /></div> */}

        </div>
        
    </header>
  )
}
