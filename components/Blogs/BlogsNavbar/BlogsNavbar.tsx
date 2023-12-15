import { CiSearch } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import React from 'react'
// import { blogNavbarData } from "@/constants/Blogs/";

export const BlogsNavbar = () => {
    return (
        <div className="flex flex-row justify-between w-full px-20 mt-40">
            <div className="flex gap-4" >
                <div className="flex gap-[10px] items-center bg-black border-[0.5px] px-6 py-3.5 border-[#717171] rounded-full outline-none">

                    <IoWalletOutline />
                    <span className="text-base font-semibold">Fintech</span>
                </div>

                <div className="flex gap-[10px] items-center bg-black border-[0.5px] px-6 py-3.5 border-[#717171] rounded-full outline-none">

                    <GiShoppingBag />
                    <span className="text-base font-semibold">E-commerce</span>
                </div>

                <div className="flex gap-[10px] items-center bg-black border-[0.5px] px-6 py-3.5 border-[#717171] rounded-full outline-none">

                    <GiShoppingBag />
                    <span className="text-base font-semibold">Fintech</span>
                </div>

                <div className="flex gap-[10px] items-center bg-black border-[0.5px] px-6 py-3.5 border-[#717171] rounded-full outline-none">

                    <IoWalletOutline />
                    <span className="text-base font-semibold">E-commerce</span>
                </div>

                <div className="flex gap-[10px] items-center bg-black border-[0.5px] px-6 py-3.5 border-[#717171] rounded-full outline-none">

                    <GiShoppingBag />
                    <span className="text-base font-semibold">Fintech</span>
                </div>


            </div>
            <div className="flex items-center bg-black border-[0.5px] px-6 py-3.5 border-[#717171] rounded-lg outline-none gap-3" >
                <CiSearch />
                <input className="border-none bg-black outline-none" type="text" placeholder="Search here..." />
            </div>

        </div>

    )
}