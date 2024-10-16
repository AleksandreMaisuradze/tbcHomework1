import '../global.css';
import { fetchData } from '../components/constants/auth';
import Productcard from '../components/productscard/productscard';
import './product.css';
import NotFoundPage from '../notfound/notfound';

export default async function Product() {
    let data;

    try {
        data = await fetchData(`https://dummyjson.com/products`);
        console.log(data);


    } catch (error) {
        <NotFoundPage />
    }

    if (!data) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <>
            <div className='sort_div'>
                <button className='sort_button'>

                </button>
                <select >
                    <option value='price'>Price</option>
                    <option value='title'>Title</option>
                    <option value='id'>ID</option>
                </select>
                <input
                    type='search'
                    placeholder='Search'
                    className='search'

                />
            </div>
            <div className='productListDiv'>
                {data.products.length > 0 ? (
                    data.products.map((product) => <Productcard key={product.id} product={product} />)
                ) : (
                    <NotFoundPage />
                )}
            </div>
        </>
    );
}
