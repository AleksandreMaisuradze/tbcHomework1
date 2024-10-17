import '../global.css';
import { fetchData } from '../components/constants/auth';
import Productcard from '../components/productscard/productscard';
import './product.css';
import NotFoundPage from '../notfound/notfound';
import SearchInput from '../components/searchInput/searchInput';
import Sort from '../components/sort/sort';

export default async function Product({ searchParams }) {
    let data = [];
    const searchValue = searchParams.search || '';
    const order = searchParams.order || '';
    const sortBy = searchParams.sortBy || ''

    try {
        if (searchValue) {
            data = await fetchData(`https://dummyjson.com/products/search?q=${searchValue}`);
            data = data.products || [];
        } else if (order && sortBy) {
            data = await fetchData(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`);
            data = data.products || [];
        } else {
            data = await fetchData(`https://dummyjson.com/products`);
            data = data.products || [];
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
                <Sort />
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
