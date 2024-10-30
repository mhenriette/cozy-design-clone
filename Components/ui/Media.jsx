import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Media({style, url, Img}) {
  return (
   <div className={`w-8 rounded-md m-1 h-8 items-center flex justify-center ${style} drive `}> 
   <Link href={url} ><Image src={Img} width='12' height='12' alt='media'/></Link></div>
  )
}
