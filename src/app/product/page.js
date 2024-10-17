import '../global.css';
import { fetchData } from '../components/constants/auth';
import Productcard from '../components/productscard/productscard';
import './product.css';
import NotFoundPage from '../notfound/notfound';
import SearchInput from '../components/searchInput/searchInput';

export default async function Product({ searchParams }) {
    let data;
    const searchValue = searchParams.search || '';

    try {
        if (searchValue) {
            const searchResult = await fetchData(`https://dummyjson.com/products/search?q=${searchValue}`);
            data = searchResult.products || [];
        } else {
            const allProducts = await fetchData(`https://dummyjson.com/products`);
            data = allProducts.products || [];
        }
    } catch (error) {
        return <NotFoundPage />;
    }

    if (!data || data.length === 0) {
        return <NotFoundPage />;
    }

    return (
        <>
            <div className='sort_div'>
                <button className='sort_button'></button>
                <select>
                    <option value='price'>Price</option>
                    <option value='title'>Title</option>
                    <option value='id'>ID</option>
                </select>
                <SearchInput />
            </div>
            <div className='productListDiv'>
                {data.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
