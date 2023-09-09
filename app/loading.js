import React from 'react'

export default function loading() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}
