"use client"

import { AboutCard } from './AboutCard'
import { AboutData } from '@/constants/About'
import React from 'react'

export const About = () => {
  return (
    <div className='pl-[20px] pb-[30px] mt-[45px] border-l-[1px] md:border-l-[0px] border-dashed border-primary flex flex-col gap-[80px] w-full relative max-w-[768px]'>
      {
        AboutData.map(({question, answer, image}, index) => {
          return <AboutCard key={crypto.randomUUID()} position={index&1? "right" : "left"} question={question} answer={answer} image={image} />
        })
      }
      <div className='hidden md:block absolute h-full w-[1px] border-l-[1px] border-dashed border-primary left-[50%]'></div>
    </div>
  )
}