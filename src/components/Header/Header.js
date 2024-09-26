import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <nav className='header_nav'>
                <ul className='header_ul'>
                    <li className='header_li'>Home</li>
                    <li className='header_li'>About Us</li>
                    <li className='header_li'>Contact</li>
                </ul>
            </nav>
        </header>

    )
}
