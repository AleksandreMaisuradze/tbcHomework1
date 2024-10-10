'use client'
import React, { useEffect, useState } from 'react'
import '../global.css'
import { fetchData } from '../components/constants/auth'
import './blog.css'
import { BallTriangle } from 'react-loader-spinner'
import PostsCard from '../components/postscard/postscard'

export default function Product() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchData('https://dummyjson.com/posts')
            .then((data) => {
                setData(data.posts)
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
        )
    }

    return (
        <div className='productListDiv'>
            {data.map((post) => <PostsCard key={post.id} post={post} />)}
        </div>
    )
}
