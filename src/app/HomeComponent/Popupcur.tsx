// components/AutoPopup.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const AutoPopup = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setShowPopup(true);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = showPopup ? 'hidden' : '';
        }
    }, [showPopup]);

    if (!showPopup) return null;

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Popup content */}

            <div className="z-10 relative bg-white opacity-100 shadow-lg m-3 md:m-0 lg:m-0 p-6 rounded-lg w-full max-w-xl text-center">
                <button
                    className="top-0 right-2 absolute text-[30px] text-gray-500 hover:text-black cursor-pointer"
                    onClick={() => setShowPopup(false)}
                >
                    &times;
                </button>
                <h2 className="mb-1 font-bold text-xl">Welcome to</h2>
                <div className="flex justify-center pb-3">
                    <Image src="/logo.png" alt='logo' width={150} height={150} />
                </div>

                {/* <p className='pb-5'>Select your Country Where to</p> */}

                <h5 className='pb-3 font-black text-[22px]'>Shipping To</h5>

                <div className="flex justify-center items-center gap-5 pt-2">
                    <button className='bg-red-600 p-2 pr-5 pl-5 text-white cursor-pointer'>India</button>
                    <button className='bg-red-600 p-2 text-white cursor-pointer'>Other Countries</button>
                </div>
            </div>
        </div>
    );
};

export default AutoPopup;
