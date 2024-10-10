import Link from 'next/link';
import './notfound.css'; 
import { routes } from '../components/constants/routes';

const NotFoundPage = () => {
    return (
        <div className="notfound">
            <h1 className="title">404</h1>
            <p className="message">Page not found</p>
            <Link href={routes.home} className="link"><p>Home</p></Link>
        </div>
    );
};

export default NotFoundPage;
