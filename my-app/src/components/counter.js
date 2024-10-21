"use client"

import react, { useState } from 'react';

function Counter() {
    const [count, setCount] = usetState(0);

    return (
        <div className="flex flex-col items-counter justify-counter min-h-screen bg-gray-100">
            <p className="text-2x1 font-semibold mb-4">You clicked <span className="text-blue-600">{count}</span>times</p>
            <button onClick={() => setCount(count + 1)} className="px-4 py-2 text-white bg-blue-500 rebounded hover:bg-blue-600 focus:online-none focus:ring-2 focus:ring-blue-300">Click me</button>
        </div>
    );
}