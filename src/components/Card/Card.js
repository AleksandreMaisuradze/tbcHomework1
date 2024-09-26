import React from 'react'
import './Card.css'


export default function Card(props) {
    return (
        <div className='card'>
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.description}</p>
            <img src={props.image} className='image' alt='coffee' ></img>
            <button className='button'>Add To Cart</button>
        </div>
    )
}
