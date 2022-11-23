import React from 'react'

export default function Buttons({style, text}) {
  return (
    <button className={`bg-shadedorange  bg-shaded  py-5 whitespace-pre-line text-center w-full md:w-auto md:px-10 font-bold font-Geomanist text-lightsaturate text-[18px] uppercase rounded-[10px] md:whitespace-nowrap btn
    ${style}`} >{text}</button>
  )
}
