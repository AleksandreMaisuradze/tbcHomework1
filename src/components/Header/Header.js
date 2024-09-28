import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'

export default function Header() {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(routes.home)
    }
    const clickHandler2 = () => {
        navigate(routes.aboutUs)
    }
    const clickHandler3 = () => {
        navigate(routes.contact)
    }
    return (
        <header className='header'>
            <nav className='header_nav'>
                <ul className='header_ul'>
                    <li className='header_li' onClick={clickHandler}>Home</li>
                    <li className='header_li' onClick={clickHandler2}>About Us</li>
                    <li className='header_li' onClick={clickHandler3}>Contact</li>
                </ul>
            </nav>
        </header>

    )
}
