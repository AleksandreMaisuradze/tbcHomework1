import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import BlogImage1 from '../../images/blog11.png'
import BlogImage2 from '../../images/blog22.png'
import BlogImage3 from '../../images/blog33.png'
import './Blog.css'

export default function Blog() {
    return (
        <div className='blogPage'>
            <BlogCard title='What Writers Should Know! Part Ten: Marketing' image={BlogImage1} text='Hi SEers! Denise here with What Write Should Know! Part ten explores my least favorite thing, marketing. Over twenty years ago, I...'/>
            <BlogCard title='Holding On' image={BlogImage2} text='A heartbeat slowly fadingeyes filled with unsaid truthswarmth held in fragile handslove close yet slipping away time lingers in stillnesspain beneath the silencea gentle...'/>
            <BlogCard title='Better me' image={BlogImage3} text='“There is only one corner of the universe you can be certain of improving, and that’s your own self.” – Aldous Huxley My priority to see...'/>
        </div>
    )
}
