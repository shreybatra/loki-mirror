"use client"

import Image from 'next/image'
import LandingVideoThumbnail from '@/assets/png/landing_video_thumbnail.png';
import PlayButton from '@/assets/svg/play_btn.svg';
import React from 'react'

export const OutOfTheBox = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className='flex flex-col gap-[36px] items-center md:flex-row'>
      <div className='video-thumbnail-container p-[6px] relative'>
        <Image src={LandingVideoThumbnail} alt='Landing video'/>
        <div className='video-play-button'  onClick={() => setShowModal(true)}>
          <Image src={PlayButton} alt='Play'/>
        </div>
      </div>
      <div className='flex flex-col gap-[16px] md:gap-[42px]'>
        <div className='flex flex-col w-full gap-[12px]'>
          <h3 className='text-[16px] font-[700]'>Out of the box</h3>
          <h2 className='text-gradient text-[20px] font-[700] md:text-[32px]' style={{backgroundColor:"red"}}>Flexibility, Scalability, Security</h2>
        </div>
        <div className='flex flex-col gap-[12px] text-muted text-[12px]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex w-[100%] fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className=" relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#020617] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <iframe  src="https://drive.google.com/file/d/1ky79fobIh_i7807Nj1AsWyndcTb0gM5U/preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-[400px] h-[300px] md:w-[640px] md:h-[420px]'></iframe>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  
                  <button
                    className="bg-[#6C3DD1] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
