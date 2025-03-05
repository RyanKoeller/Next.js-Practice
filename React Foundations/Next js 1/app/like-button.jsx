'use client'

import { useState } from 'react';

export default function LikeButton() {
    // First item in the array is the state value
    // Second item in the array is a function to update the value
    // 0 is the initial state
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <button onClick={handleClick}>Like({likes})</button>
    )
}
