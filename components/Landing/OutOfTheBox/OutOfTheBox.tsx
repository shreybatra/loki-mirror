"use client"
import Image from 'next/image'
import React from 'react'
import LandingVideoThumbnail from '@/assets/png/landing_video_thumbnail.png';
import PlayButton from '@/assets/svg/play_btn.svg';

export const OutOfTheBox = () => {
  return (
    <div className='flex gap-[36px] items-center'>
      <div className='video-thumbnail-container p-[16px] relative'>
        <Image src={LandingVideoThumbnail} alt='Landing video'/>
        <div className='video-play-button'>
          <Image src={PlayButton} alt='Play'/>
        </div>
      </div>
      <div className='flex flex-col gap-[42px]'>
        <div className='flex flex-col w-2/3'>
          <h3 className='text-[28px] font-[700]'>Out of the box</h3>
          <h2 className='text-gradient text-[32px] font-[700]'>Flexibility, Scalability, Security</h2>
        </div>
        <div className='flex flex-col gap-[12px] text-muted text-[14px]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}
