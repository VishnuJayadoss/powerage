'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, User, ShoppingCart, Search } from 'lucide-react'
import { LuLogOut } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

export default function Desktop() {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [isDropdownOpenprofile, setDropdownOpenprofile] = useState(false)
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const suggestions = [
        "Royal Enfield",
        "Honda",
        "Hero",
        "Exhaust Accessories",
        "Motorcycle Parts"
    ];

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleIconClick = () => {
        if (window.innerWidth < 768) { // md breakpoint
            setDropdownOpenprofile(!isDropdownOpenprofile);
        }
    };


    return (
        <>
            <div className='flex justify-between items-center mx-auto px-4 py-3 pl-10 md:pl-0 lg:pl-0 max-w-7xl'>
                <Link href='/' className='font-bold text-xl logo'>
                    <Image src='/logo.png' alt='Logo' width={150} height={40} priority />
                </Link>

                <div className='flex items-center gap-6'>
                    <button onClick={() => setShowSearchPopup(true)}>
                        <Search className='hover:text-red-600' />
                    </button>
                    <div
                        className="group relative"
                        onMouseEnter={() => window.innerWidth >= 768 && setDropdownOpenprofile(true)} // Only hover on desktop
                        onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpenprofile(false)}
                    >
                        {/* Trigger */}
                        <button
                            onClick={handleIconClick}
                            className="cursor-pointer"
                        >
                            <User className="hover:text-red-600" />
                        </button>

                        {/* Dropdown menu */}
                        {isDropdownOpenprofile && (
                            <div className="top-3 right-[-20px] z-50 absolute bg-white shadow-lg mt-2 rounded-md w-40">
                                <div className="py-2">
                                    <Link href="/profile" className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2">
                                        <User size={18} />
                                        <span>Profile</span>
                                    </Link>
                                    <Link href="/logout" className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2">
                                        <LuLogOut size={18} />
                                        <span>Logout</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link href='#' className='relative'>
                        <ShoppingCart className='hover:text-red-600' />
                        <span className='-top-1 -right-2 absolute bg-gray-700 px-1.5 rounded-full text-white text-xs'>
                            1
                        </span>
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {showSearchPopup && (
                    <motion.div
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="top-0 left-0 z-50 fixed flex justify-center items-start w-full h-full"
                    >
                        {/* Overlay with opacity-40 */}
                        <div className="absolute bg-black opacity-40 w-full h-full" />

                        {/* Form container with opacity-100 */}
                        <div className="top-40 z-10 relative bg-white opacity-100 shadow-lg p-6 rounded-lg w-full max-w-md">
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold text-lg">Search</h4>
                                <button
                                    type="button"
                                    onClick={() => setShowSearchPopup(false)}
                                    className="rounded text-[20px] text-black cursor-pointer"
                                >
                                    <IoMdClose />
                                </button>
                            </div>
                            <form className="pt-5">
                                <input
                                    type="text"
                                    placeholder="Type to search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="mb-4 p-2 border rounded outline-none w-full"
                                />
                            </form>

                            {/* Display search results or suggestions */}
                            {searchQuery && (
                                <div className="mt-4 max-h-60 overflow-y-auto">
                                    {filteredSuggestions.length > 0 ? (
                                        filteredSuggestions.map((suggestion, index) => (
                                            <div key={index} className="hover:bg-gray-200 p-2 cursor-pointer">
                                                {suggestion}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="p-2 text-gray-500">No results found</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>



            <nav className='hidden relative md:flex justify-center gap-[100px] py-2 border-gray-200 border-t font-semibold text-sm'>
                <Link href='/' className='pt-2 hover:text-red-600'>
                    HOME
                </Link>

                <div className="relative pt-2">
                    <button
                        className="flex items-center hover:text-red-600"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                        PRODUCT <ChevronDown size={16} className="ml-1" />
                    </button>

                    {isDropdownOpen && (
                        <div className="right-0 left-[-460px] z-50 absolute bg-[#f5f5f5] shadow-xl mt-4 px-8 py-6 rounded-md w-[1340px] h-40 text-sm">
                            <div className="flex gap-8 mx-auto">

                                {/* Left: Store message */}
                                <div className="w-1/2">
                                    <p className="pt-5 font-light text-[30px] text-gray-700">
                                        Visit Our <br />
                                        <span className="font-medium text-red-600">Store</span>
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="bg-gray-300 w-px"></div>

                                {/* Middle + Right */}
                                <div className="flex gap-[60px] w-full">

                                    {/* Middle column links */}
                                    <div className="flex flex-col gap-5">
                                        <Link href="#" className="hover:text-red-600">Royal Enfield</Link>
                                        <Link href="#" className="hover:text-red-600">Honda</Link>
                                        <Link href="#" className="hover:text-red-600">Hero</Link>
                                    </div>

                                    {/* Divider */}
                                    <div className="bg-gray-300 ml-[120px] w-px"></div>

                                    {/* Right column links */}
                                    <div className="flex flex-col gap-2">

                                        <Link href="/product/exhaust-accessories" className="hover:text-red-600">Exhaust Accessories</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Link href='#' className='pt-2 hover:text-red-600'>
                    ABOUT
                </Link>
                <Link href='#' className='pt-2 hover:text-red-600'>
                    DEALER
                </Link>
                <Link href='#' className='pt-2 hover:text-red-600'>
                    CONTACT
                </Link>
            </nav>
        </>

    );
}