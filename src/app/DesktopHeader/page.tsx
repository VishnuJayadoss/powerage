'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ShoppingCart, Search } from 'lucide-react'
import { FaRegUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

export default function Desktop() {
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
                    <Image src='/logo.png' alt='Logo' width={150} height={40} priority className='pt-4 lg:pt-0' />
                </Link>

                <div className='flex items-center gap-6'>
                    <button onClick={() => setShowSearchPopup(true)}>
                        <Search className='hover:text-red-600 cursor-pointer' />
                    </button>
                    <div
                        className="group top-[4px] relative"
                        onMouseEnter={() => window.innerWidth >= 768 && setDropdownOpenprofile(true)} // Only hover on desktop
                        onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpenprofile(false)}
                    >
                        {/* Trigger */}
                        <button
                            onClick={handleIconClick}
                            className="cursor-pointer"
                        >
                            <FaRegUser size={18} className="hover:text-red-600" />
                        </button>

                        {/* Dropdown menu */}
                        {isDropdownOpenprofile && (
                            <div className="top-5 right-[-30px] z-50 absolute bg-white shadow-lg mt-2 rounded-md w-40">
                                <div className="py-2">
                                    <Link href="/profile" className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2">
                                        <FaRegUser size={18} />
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



            <nav className='hidden relative md:flex justify-center gap-[100px] border-gray-200 border-t font-black text-md'>
                <Link href='/' className='pt-2 hover:text-red-600 cal-sans'>
                    HOME
                </Link>

                <div className="relative pt-2">
                    {/* Button */}
                    <button
                        className="peer flex items-center hover:text-red-600 cal-sans"
                    >
                        PRODUCT <ChevronDown size={16} className="ml-1" />
                    </button>

                    {/* Dropdown */}
                    <div className="invisible hover:visible peer-hover:visible right-0 left-[-430px] z-50 absolute bg-[#f5f5f5] opacity-0 hover:opacity-100 peer-hover:opacity-100 shadow-xl mt-4 px-8 py-6 rounded-md lg:w-[1300px] h-40 text-sm transition-all duration-300 dropdown-menu-product">
                        <div className="flex gap-8 mx-auto w-full">

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
                                    <Link href="/category" className="hover:text-red-600">Royal Enfield</Link>
                                    <Link href="/category" className="hover:text-red-600">Honda</Link>
                                    <Link href="/category" className="hover:text-red-600">Hero</Link>
                                </div>

                                {/* Divider */}
                                <div className="bg-gray-300 ml-[120px] w-px"></div>

                                {/* Right column links */}
                                <div className="flex flex-col gap-2">
                                    <Link href="/category" className="hover:text-red-600">Exhaust Accessories</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Link href='/about' className='pt-2 hover:text-red-600 cal-sans'>
                    ABOUT
                </Link>
                <Link href='/dealer' className='pt-2 hover:text-red-600 cal-sans'>
                    DEALER
                </Link>
                <Link href='/contact' className='pt-2 hover:text-red-600 cal-sans'>
                    CONTACT
                </Link>
            </nav>
        </>

    );
}