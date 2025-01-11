"use client"

import Image, { StaticImageData } from 'next/image';

import React from 'react';
import TestiMonialIcon from '@/assets/svg/testimonial_icon.svg';

interface TestimonialCardProps {
    description: string;
    customerName: string;
    companyName: string;
    image: StaticImageData;
}

export const TestimonialCard = ({description, customerName, companyName, image}: TestimonialCardProps) => {
  return (
    <div className='testimonial-card m-2 flex flex-col gap-[12px]'>
        <div className='w-[32px] h-[32px] rounded-[9999px]'>
            <Image src={TestiMonialIcon} alt='testimonial icon' />
        </div>
        <div>
            <p className='text-[14px]'>{description}</p>
        </div>
        <div className='flex gap-[8px] items-center'>
            <div>
                <Image className='rounded-full' height={40} src={image} alt={customerName} />
            </div>
            <div className='flex flex-col gap-[2px]'>
                <h5 className='text-[16px] font-semibold text-primary '>{customerName}</h5>
                <p className='text-muted font-semibold text-[14px]'>{companyName}</p>
            </div>
        </div>
    </div>
  )
}
