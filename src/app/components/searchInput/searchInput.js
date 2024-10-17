'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchInput() {
    const [searchQuery, setSearchQuery] = useState('')
    const [debounce, setDebounce] = useState(searchQuery)
    const router = useRouter()

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounce(searchQuery)

        }, 400)


        return () => {
            clearTimeout(handler)
        }

    }, [searchQuery])

    useEffect(() => {
        if (debounce) {
            router.push(`?search=${debounce}`);
        }
    }, [debounce, router]);

    return (
        <input
            type='search'
            placeholder='Search'
            className='search'
            value={searchQuery}
            onChange={(e) => {
                setSearchQuery(e.target.value)
            }}
        />
    )
}
