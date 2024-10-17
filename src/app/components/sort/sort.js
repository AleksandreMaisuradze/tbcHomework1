'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sort() {
    const [buttonText, setButtonText] = useState('asc');
    const [selectedOption, setSelectedOption] = useState('price');
    const router = useRouter();

    const handleSort = () => {
        const newOrder = buttonText === 'asc' ? 'desc' : 'asc';
        setButtonText(newOrder);
        router.push(`?order=${newOrder}&sortBy=${selectedOption}`);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <button className='sort_button' onClick={handleSort}>
                {buttonText}
            </button>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value='price'>Price</option>
                <option value='title'>Title</option>
                <option value='id'>ID</option>
            </select>
        </>
    );
}
