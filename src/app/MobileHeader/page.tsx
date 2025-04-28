'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState<string | null>(null)

    return (
        <>
            <button onClick={() => setIsOpen(true)} className='md:hidden top-[55px] left-[5px] absolute'>
                <Menu size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        className='z-50 fixed inset-0 bg-black bg-opacity-50'
                    >
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            exit={{ x: -100 }}
                            className='relative bg-white shadow-lg p-5 w-64 h-full text-black'
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    setIsOpen(false)
                                    setSubmenuOpen(null)
                                }}
                                className='top-4 right-4 absolute text-black text-2xl'
                            >
                                <X size={24} />
                            </button>

                            {/* Back Button (shows only in submenu) */}
                            {submenuOpen && (
                                <button
                                    onClick={() => setSubmenuOpen(null)}
                                    className='top-4 left-4 absolute text-black text-2xl'
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}

                            {/* Navigation */}
                            <nav className='flex flex-col space-y-4 mt-12'>

                                {/* Main Menu */}
                                {!submenuOpen && (
                                    <>
                                        <Link href='/' className='nav-link'>
                                            Home
                                        </Link>
                                        <button
                                            onClick={() => setSubmenuOpen('product')}
                                            className='flex justify-between items-center nav-link'
                                        >
                                            Product <ChevronRight size={16} />
                                        </button>
                                        <Link href='/about' className='nav-link'>
                                            About
                                        </Link>
                                        <Link href='/dealer' className='nav-link'>
                                            Dealer
                                        </Link>
                                        <Link href='/contact' className='nav-link'>
                                            Contact
                                        </Link>
                                    </>
                                )}

                                {/* Submenu */}
                                {submenuOpen === 'product' && (
                                    <>
                                        <Link href='/category' className='nav-link'>
                                            Royal Enfield
                                        </Link>
                                        <Link href='/category' className='nav-link'>
                                            Hero
                                        </Link>
                                        <Link href='/category' className='nav-link'>
                                            Honda
                                        </Link>
                                        <Link href='/category' className='nav-link'>
                                            Exhaust Accessories
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
