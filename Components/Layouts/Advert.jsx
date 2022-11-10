import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Advert() {
  return (
    <div className='bg-darkblue'>
        <div className='container mx-auto flex justify-center flex-col  items-center'>
            <p className='text-shadedpink text-4xl text-center font-Fraunces72ptsupersoft font-normal mt-16'>More than 150 happy clients</p>
            <div className='flex flex-col md:flex-row md:py-8 md:px-4 items-center'>
                <Link href='/#'><Image width='118' height='48' alt='north' src='/logo10.svg' priority className='logo' /></Link>
                <Link href='/#'><Image width='106' height='32' alt='logo11' src='/logo11.svg' priority className='logo' /></Link>
                <Link href='/#'><Image width='150' height='32' alt='logo12' src='/logo12.svg' priority className='logo' /></Link>
                <Link href='/#'><Image width='87' height='32' alt='logo13' src='/logo13.svg' priority className='logo' /></Link>
                <Link href='/#'><Image width='120' height='32' alt='logo14' src='/logo14.svg' priority className='logo' /></Link>
                <Link href='/#'><Image width='100' height='32' alt='sony' src='/logo15.svg' priority className='logo' /></Link>
                <Link href='/#'><Image width='55' height='32' alt='logo16' src='/logo16.svg' priority className='logo' /></Link>
            </div>

        </div>
    </div>
  )
}
