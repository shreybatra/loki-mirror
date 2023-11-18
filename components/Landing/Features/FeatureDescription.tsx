"use client"
import Image from 'next/image';
import React from 'react'

interface FeatureDescriptionProps {
    icon: string;
    name: string;
    description: string;
    className?: string;
}

export const FeatureDescription = ({icon, name, description, className}: FeatureDescriptionProps) => {
  console.log(className);
  return (
    <div className={`flex flex-col border p-[24px] feature-description w-full h-[250px] sm:h-[200px] md:h-[250px] lg:h-[230px] xl:h-[220px] min-h-fit ${className}`}>
        <div>
            <Image src={icon} alt={name} />
        </div>
        <div className='flex flex-col gap-[8px]'>
        <h2 className='text-[16px] md:text-[18px] lg:text-[20px] font-[700]'>{name}</h2>
        <p className='text-muted text-[12px] md:text-[14px] lg:text-[16px]'>{description}</p>
        </div>
    </div>
  )
}
