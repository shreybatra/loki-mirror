import { IoWalletOutline } from 'react-icons/io5'
import React from 'react'
type BlogButtonProps = {
    tag: string
}


const BlogButton = ({ tag }: BlogButtonProps) => {
    return (
        <button className="items-center bg-[#6C3DD14D] w-fit px-3 py-1.5  rounded-full outline-none text-lg font-semibold">
            {tag}
        </button>
    )
}

export default BlogButton