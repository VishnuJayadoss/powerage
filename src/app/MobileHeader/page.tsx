"use client";
// components/MobileHeader.js
import Image from "next/image";
import Link from "next/link";
import Search from "../Header/Components/Search";
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react";
import CartCount from "../Header/Components/CartCount";
import { FiShoppingCart } from "react-icons/fi";

export default function MobileHeader() {

  const [isOpen, setIsOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null)

  return (
    <header className="xl:hidden -bottom-1 left-0 z-[100] fixed flex flex-row bg-gray-200 w-full h-[80px]">
      {/* Logo Section */}
      <div className="flex flex-col">
        <div className="h-[4px]" />
        {/* <div className="bg-white h-[18px]" /> */}
        <div className="flex items-center bg-white px-[20px] grow">
          <Link href="/en.html">
            <Image
              src="/logo.png"
              alt="Powerage"
              width={160}
              height={60}
              priority
            />
          </Link>
        </div>
      </div>
      {/* Decorative Section */}
      <div className="flex flex-col">
        <div className="h-[4px]" />
        <div className="flex items-center bg-white h-[18px]">
          <svg width="44" height="18">
            <path d="M0,0 C12,0 22,18 44,18 L44,0" fill="#e5e7eb" />
          </svg>
        </div>
        <div className="bg-white grow" />
      </div>
      {/* Actions Section */}
      <div className="flex flex-col grow">
        <div className="h-[22px]" />
        <div className="flex flex-row justify-end items-center gap-5 bg-white pr-[20px] grow">
          {/* Search Icon */}
          <div className="text-2xl">
            <Search />
          </div>

          <div className="right-1 relative">
            <FiShoppingCart className="font-bold text-2xl cursor-porigin-center" />
            < CartCount />
          </div>

          <button
            aria-label="Menu"
            onClick={() => setIsOpen(true)}
            className="flex flex-row items-center gap-[8px] text-gray-400"
          >
            {/* <span className="font-bold text-sm">Menu</span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.842"
              height="16"
              viewBox="0 0 20.842 16"
            >
              <g>
                <path d="M0,1h20.842" stroke="#000" strokeWidth="2" />
                <path d="M0,8h20.842" stroke="#000" strokeWidth="2" />
                <path d="M0,15h20.842" stroke="#000" strokeWidth="2" />
              </g>
            </svg>
          </button>

          {/* Drawer */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Background Overlay */}
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="z-40 fixed inset-0 bg-black"
                  onClick={() => {
                    setIsOpen(false);
                    setSubmenuOpen(null);
                  }}
                />

                {/* Sidebar Drawer */}
                <motion.div
                  key="drawer"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="top-0 right-0 z-50 fixed bg-black shadow-lg p-5 w-64 h-full overflow-hidden text-white"
                >
                  {/* Back Button */}
                  {submenuOpen && (
                    <button
                      onClick={() => setSubmenuOpen(null)}
                      className="top-4 left-4 z-10 absolute text-white"
                    >
                      <ChevronLeft size={24} />
                    </button>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSubmenuOpen(null);
                    }}
                    className="top-4 right-4 z-10 absolute text-white"
                  >
                    <X size={24} />
                  </button>

                  {/* Animated Content Switching */}
                  <div className="relative pt-12 w-full h-full">
                    <AnimatePresence mode="wait">
                      {!submenuOpen ? (
                        <motion.div
                          key="main-menu"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 50, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute w-full"
                        >
                          <nav className="flex flex-col space-y-4">
                            <Link href="/" className="nav-link">Home</Link>
                            <button
                              onClick={() => setSubmenuOpen('product')}
                              className="flex justify-between items-center nav-link"
                            >
                              Product <ChevronRight size={16} />
                            </button>
                            <Link href="/about" className="nav-link">About</Link>
                            <Link href="/dealer" className="nav-link">Dealer</Link>
                            <Link href="/contact" className="nav-link">Contact</Link>
                            <Link href="/profile" className="nav-link">Profile</Link>
                          </nav>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="submenu"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -50, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute w-full"
                        >
                          <nav className="flex flex-col space-y-4">
                            <Link href="/category" className="nav-link">Royal Enfield</Link>
                            <Link href="/category" className="nav-link">Hero</Link>
                            <Link href="/category" className="nav-link">Honda</Link>
                            <Link href="/category" className="nav-link">Exhaust Accessories</Link>
                          </nav>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
