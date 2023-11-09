"use client"
import Image from 'next/image';
import React from 'react'

interface FeatureDescriptionProps {
    icon: string;
    name: string;
    description: string;
}

export const FeatureDescription = ({icon, name, description}: FeatureDescriptionProps) => {
  return (
    <div className='flex flex-col border p-[24px] feature-description'>
        <div>
            <Image src={icon} alt={name} />
        </div>
        <div className='flex flex-col gap-[8px]'>
        <h2 className='text-[20px] font-[700]'>{name}</h2>
        <p className='text-muted text-sm'>{description}</p>
        </div>
    </div>
  )
}
