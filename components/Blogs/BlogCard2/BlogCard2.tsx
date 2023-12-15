import BlogButton from "../BlogButton/BlogButton";
import { FaCircle } from "react-icons/fa";
import Image from "next/image"
import blogCard from '@/assets/svg/blog-bg.svg'

const BlogsCard2 = ({ type }: { type?: "LEFT" }) => {
    return (
        <div className="p-4 bg-[#131212] rounded-lg border-2 border-[#8D8D8D]">
            <div className={`grid ${type ? "grid-row" : "grid-cols-2"} gap-4`}>
                <Image src={blogCard} alt="blog-card" />
                <div>
                    <h2 className="text-lg font-bold mt-4 mb-2">ISO 27001 Compliance: Why it’s important?</h2>
                    <p>
                        The International Organization for Standardization (ISO) is a non-governmental body that provides technical, industrial, and commercial standards for government agencies and private companies.
                    </p>
                    <div className="flex flex-row items-center justify-items-center mt-4 gap-4">
                        <p>Dec 25, 2023</p>
                        <FaCircle />
                        <p>7 mins read</p>
                        <FaCircle />
                        <BlogButton tag="Fintech" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BlogsCard2