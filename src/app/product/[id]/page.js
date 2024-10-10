import { fetchData } from "../../components/constants/auth";
import NotFoundPage from "../../notfound/notfound";
import '../../global.css'
import './productdetailspage.css'
import Link from "next/link";
import { routes } from "../../components/constants/routes";

export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    if (!data.products) {
        return [];
    }
    return data.products.map((product) => ({
        id: product.id.toString(),
    }));
}

const ProductDetailsPage = async ({ params }) => {
    const { id } = params;

    try {
        const productData = await fetchData(`https://dummyjson.com/products/${id}`);

        if (!productData || !productData.id) {
            return <NotFoundPage />;
        }

        return (
            <>
                <div className="product-details">
                    <h1>{productData.title}</h1>
                    <h3>Category: {productData.category}</h3>
                    <img src={productData.images[0]} alt={productData.title} width={300} height={300} />
                    <p>Price: ${productData.price}</p>
                    <p>Rating: {productData.rating}</p>
                    <p>Description: {productData.description}</p>
                </div>
                <Link href={routes.product}><div className="link" >back</div></Link>
            </>

        );
    } catch (error) {
        return <NotFoundPage />;
    }
};

export default ProductDetailsPage;
