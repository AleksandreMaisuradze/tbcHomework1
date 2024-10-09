import Link from "next/link";
import { routes } from "./constants/routes";
import '../components/header/header.css'

export default function Navigation() {
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header_ul">
                    <li className="header_li">
                        <Link href={routes.home}>Home</Link>
                    </li>
                    <li className="header_li">
                        <Link href={routes.product}>Product</Link>
                    </li>
                    <li className="header_li">
                        <Link href={routes.blog}>Blog</Link>
                    </li>
                    <li className="header_li">
                        <Link href={routes.contact}>Contact</Link>
                    </li>
                    <li className="header_li">
                        <Link href={routes.aboutUs}>About Us</Link>
                    </li>
                    <li className="header_li">
                        <Link href={routes.profile}>Profile</Link>
                    </li>
                    <li className="header_li">
                        <Link href={routes.bonus}>Assigment - 3</Link>
                    </li>
                </ul >
            </nav>
        </header>
    )
}