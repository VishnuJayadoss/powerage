'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, User, ShoppingCart, Search } from 'lucide-react'

export default function Desktop() {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    return (
        <>
            <div className='flex justify-between items-center mx-auto px-4 py-3 max-w-7xl'>
                <Link href='/' className='font-bold text-xl logo'>
                    <Image src='/logo.png' alt='Logo' width={150} height={40} priority />
                </Link>

                <div className='flex items-center gap-6'>
                    <Link href='#'>
                        <Search className='hover:text-red-600' />
                    </Link>
                    <Link href='#'>
                        <User className='hover:text-red-600' />
                    </Link>
                    <Link href='#' className='relative'>
                        <ShoppingCart className='hover:text-red-600' />
                        <span className='-top-1 -right-2 absolute bg-gray-700 px-1.5 rounded-full text-white text-xs'>
                            1
                        </span>
                    </Link>
                </div>
            </div>

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