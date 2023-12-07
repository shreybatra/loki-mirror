import { CiSearch } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import React from 'react'

export const BlogsNavbar = () => {
    return (
        <div className="flex flex-row justify-between  bg-red-900 w-full px-[10px] py-[6px] ">
            <div className="flex gap-4" >
                <div className="flex gap-[10px] items-center">

                    <IoWalletOutline />
                    <span className="text-base font-semibold">Fintech</span>
                </div>
                <div>
                    <GiShoppingBag />
                    <span>E-commerce</span>
                </div>
                <div>
                    <IoWalletOutline />
                    <span>Finteh</span>
                </div>
                <div>
                    <GiShoppingBag />
                    <span>E-commerce</span>
                </div>

            </div>
            <div className="flex " >
                <CiSearch />
                <input type="text" placeholder="Search here..." />
            </div>
        </div>
    )
}
