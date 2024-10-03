import React from 'react'
import './ProfileCard.css'

export default function ProfileCard(props) {
    return (
        <div className='profile_card'>
            <img src={props.image} className='ProfileCardImage' />
            <input type='text' placeholder={props.name} className='input' />
            <input type='text' placeholder={props.surname} className='input'/>
            <input type='email'placeholder={props.email} className='input'/>
        </div>
    )
}
