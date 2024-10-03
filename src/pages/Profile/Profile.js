import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileCardImage1 from '../../images/profileCard1.jpg'

export default function Profile() {
    return (
        <div>
            <ProfileCard image={ProfileCardImage1} name='Davit' surname='Zirakadze' email='davitzirakadze@gmail.com' />
        </div>
    )
}

