import React from 'react'
import './BlogCard.css'


export default function BlogCard(props) {
  return (
    <div className='blogCard'>
        <h2 className='blog_title'>{props.title}</h2>
        <img src={props.image} className='blog_image' ></img>
        <p className='blog_text'>{props.text}</p>
    </div>
  )
}
