import React, { useState } from 'react'
import { AddCategories, GifGrid } from './components';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])

    }

    return (
        <>
            <div>GitExpertApp</div>
            <AddCategories
                onNewCategory={event => onAddCategory(event)}
            />
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category = {category} 
                    />
                ))
            }
        </>
    )
}
