"use client"
import React from 'react';
import TestiMonialIcon from '@/assets/svg/testimonial_icon.svg';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
    description: string;
    customerName: string;
    companyName: string;
    image: StaticImageData;
}

export const TestimonialCard = ({description, customerName, companyName, image}: TestimonialCardProps) => {
  return (
    <div className='testimonial-card m-2 flex flex-col gap-[16px]'>
        <div className='w-[32px] h-[32px] rounded-[9999px]'>
            <Image src={TestiMonialIcon} alt='testimonial icon' />
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div className='flex gap-[8px] items-center'>
            <div>
                <Image src={image} alt={customerName} />
            </div>
            <div className='flex flex-col gap-[2px]'>
                <h5 className='text-[12px]'>{customerName}</h5>
                <p className='text-muted italic text-[10px]'>{companyName}</p>
            </div>
        </div>
    </div>
  )
}
