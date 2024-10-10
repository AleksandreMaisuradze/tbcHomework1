import Link from 'next/link';
import './productscard.css'
import { routes } from '../constants/routes';

export default function ProductCard(props) {
    const { product } = props;

    return (
        <Link href={`${routes.product}/${product.id}`} >
            <div className="productCardDiv">
                <h1>Title:{product.title}</h1>
                <h3>Category:{product.category}</h3>
                <div>
                    {product.images.length > 0 ? (
                        <img src={product.images[0]} alt="Product Image" width={200} height={200} />
                    ) : (
                        <p>No image available.</p>
                    )}
                </div>
                <div className='bottom_div'>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                </div>

            </div>
        </Link>
    );
}