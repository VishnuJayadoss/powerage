'use client'
import { useState } from 'react'
import Image from "next/image"
import { ChevronDown } from 'lucide-react'

export default function TopHeader() {
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [selectedLang, setSelectedLang] = useState('ENG')
    const languageOptions = ['ENG', 'JA']

    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState('INR')
    const currencyOptions = ['INR', 'USD']

    return (
        <div className="top-0 z-40 fixed bg-black p-2 px-2 lg:px-10 w-full">
            <div className="flex justify-between items-center">
                {/* Left text */}
                <div className="hidden md:block text-white">
                    <p className='text-[14px]'><span className="font-black">Worldwide</span> Shipping</p>
                </div>

                {/* Center image and text */}
                <div className="flex items-center gap-2 text-white">
                    <Image src="/india.webp" alt="India" width={20} height={20} />
                    <p className='text-[14px]'><span className="font-semibold">Handcrafted in</span> India</p>
                </div>

                {/* Right dropdowns */}
                <div className="flex items-center text-white">
                    {/* Currency Dropdown */}
                    <div className="relative pl-8 md:pl-0 lg:pl-0 w-15">
                        <button
                            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                            className="flex items-center gap-1 bg-black pl-2 lg:pl-6 focus:outline-none w-full text-[12px] text-left"
                        >
                            <span>{selectedCurrency}</span>
                            <ChevronDown size={14} />
                        </button>

                        {isCurrencyOpen && (
                            <ul className="z-10 absolute bg-white shadow mt-1 border rounded w-full">
                                {currencyOptions.map((cur) => (
                                    <li
                                        key={cur}
                                        onClick={() => {
                                            setSelectedCurrency(cur)
                                            setIsCurrencyOpen(false)
                                        }}
                                        className="hover:bg-red-600 px-2 py-2 rounded text-black hover:text-white cursor-pointer"
                                    >
                                        {cur}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Language Dropdown */}
                    <div className="relative w-24 md:w-32">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1 bg-black pl-8 md:pl-4 lg:pl-4 focus:outline-none w-full text-[12px] text-left"
                        >
                            <span>{selectedLang}</span>
                            <ChevronDown size={14} />
                        </button>

                        {isLangOpen && (
                            <ul className="z-10 absolute bg-white shadow mt-1 border rounded w-full">
                                {languageOptions.map((lang) => (
                                    <li
                                        key={lang}
                                        onClick={() => {
                                            setSelectedLang(lang)
                                            setIsLangOpen(false)
                                        }}
                                        className="hover:bg-red-600 px-2 py-2 rounded text-black hover:text-white cursor-pointer"
                                    >
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
