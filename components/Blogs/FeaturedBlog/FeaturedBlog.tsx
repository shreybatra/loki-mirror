import BlogsCard2 from '@/components/Blogs/BlogCard2/BlogCard2'
import React from 'react'

const FeaturedBlog = () => {
    return (
        <div className='' >
            <h3 className='text-xl'>Featured Post</h3>
            <div className='grid grid-cols-2 mt-6 items-center gap-8'>
                <div>
                    <BlogsCard2 type='LEFT'/>
                </div>
                <div className='grid items-center gap-6' >
                    <BlogsCard2 />
                    <BlogsCard2 />
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog