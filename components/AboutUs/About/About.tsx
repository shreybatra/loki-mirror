"use client"
import { AboutData } from '@/constants/About'
import React from 'react'
import { AboutCard } from './AboutCard'

export const About = () => {
  return (
    <div className='pl-[20px] pb-[30px] border-l-[1px] border-dashed border-primary flex flex-col gap-[80px]'>
      {
        AboutData.map(({question, answer, image}) => {
          return <AboutCard key={crypto.randomUUID()} question={question} answer={answer} image={image} />
        })
      }
    </div>
  )
}
