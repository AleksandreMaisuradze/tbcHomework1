'use client';
import React, { useEffect, useState } from 'react';
import '../global.css';
import { fetchData } from '../components/constants/auth';
import Productcard from '../components/productscard/productscard';
import './product.css';
import { BallTriangle } from 'react-loader-spinner';

export default function Product() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [order, setOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('price');
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const fetchProductsBySearch = async () => {
        try {
            const response = await fetchData(`https://dummyjson.com/products/search?q=${debouncedSearchQuery}`);
            return response.products || [];
        } catch (err) {
            setError(err.message);
            return [];
        }
    };

    const fetchProductsSorted = async () => {
        try {
            const response = await fetchData(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`);
            return response.products || [];
        } catch (err) {
            setError(err.message);
            return [];
        }
    };

    const fetchProducts = async () => {
        try {
            if (debouncedSearchQuery) {
                const searchResults = await fetchProductsBySearch();
                setData(searchResults);
            } else {
                const sortedProducts = await fetchProductsSorted();
                setData(sortedProducts);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [debouncedSearchQuery, order, sortBy]);

    if (error) {
        return <h1>{error}</h1>;
    }

    if (isLoading) {
        return (
            <div className='spinner'>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="grey"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    const handleToggler = () => {
        setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <>
            <div className='sort_div'>
                <button className='sort_button' onClick={handleToggler}>
                    Sort {order === 'asc' ? 'Descending' : 'Ascending'}
                </button>
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value='price'>Price</option>
                    <option value='title'>Title</option>
                    <option value='id'>ID</option>
                </select>
                <input 
                    type='search' 
                    placeholder='Search' 
                    className='search' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className='productListDiv'>
                {data.map((product) => <Productcard key={product.id} product={product} />)}
            </div>
        </>
    );
}
