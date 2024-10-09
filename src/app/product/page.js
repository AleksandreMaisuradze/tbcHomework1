'use client'
import React, { useEffect, useState } from 'react'
import '../global.css'
import { fetchData } from '../components/constants/auth'
import Productcard from '../components/productscard/productcard'
import './product.css'

export default function Product() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchData('https://dummyjson.com/products')
            .then((data) => {
                setData(data.products)
            }).catch(err => {
                setError(err.message)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [])
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }

    if (isLoading) {
        <h1>Loading...</h1>
    }

    return (
        <div className='productListDiv'>
            {data.map((product) => <Productcard key={product.id} product={product} />)}
        </div>
    )
}
