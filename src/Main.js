import React from 'react'
import './Main.css'
import image1 from './images/2.jpg'
import image2 from './images/Korembi-January-2024.jpg'
import image3 from './images/images1.jpeg'

export default function Main() {
    return (
        <main className='main'>
            <div className='image_div'>
                <img src={image1} className='image' alt='nature'></img>
                <img src={image2} className='image' alt='nature'></img>
                <img src={image3} className='image' alt='nature'></img>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi, beatae eum provident sapiente repellendus officiis, unde nemo nam sed repudiandae? Alias, aliquam? Officiis vitae error repellat magni sint eius.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi, beatae eum provident sapiente repellendus officiis, unde nemo nam sed repudiandae? Alias, aliquam? Officiis vitae error repellat magni sint eius.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi, beatae eum provident sapiente repellendus officiis, unde nemo nam sed repudiandae? Alias, aliquam? Officiis vitae error repellat magni sint eius.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In excepturi, beatae eum provident sapiente repellendus officiis, unde nemo nam sed repudiandae? Alias, aliquam? Officiis vitae error repellat magni sint eius.
            </p>
        </main>)
}
