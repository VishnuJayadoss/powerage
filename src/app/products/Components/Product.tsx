"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoFilterOutline } from "react-icons/io5";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

// Add this type above your Product component
type ProductType = {
    slug: string;
    title: string;
    vendor: string;
    price: string;
    img: string;
};

export default function Product() {
    const [sortBy, setSortBy] = useState("");
    const [showDrawer, setShowDrawer] = useState(false);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    const SkeletonCard = () => (
        <div className="p-4 rounded animate-pulse">
            <div className="bg-gray-300 mb-3 rounded w-full h-[130px]"></div>
            <div className="bg-gray-300 mb-2 rounded w-1/2 h-4"></div>
            <div className="bg-gray-300 mb-2 rounded w-full h-5"></div>
            <div className="bg-gray-300 rounded w-1/3 h-4"></div>
        </div>
    );



    // Change 'any' to 'ProductType'
    const handleSort = (a: ProductType, b: ProductType) => {
        switch (sortBy) {
            case "az":
                return a.title.localeCompare(b.title);
            case "za":
                return b.title.localeCompare(a.title);
            case "low":
                return parseInt(a.price.replace(/[^\d]/g, "")) - parseInt(b.price.replace(/[^\d]/g, ""));
            case "high":
                return parseInt(b.price.replace(/[^\d]/g, "")) - parseInt(a.price.replace(/[^\d]/g, ""));
            default:
                return 0;
        }
    };

    const togglePriceFilter = (price: string) => {
        setSelectedPrices((prev) =>
            prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
        );
    };

    const handleClear = () => {
        setSelectedPrices([]);
        setShowDrawer(false);
    };

    const handleApply = () => {
        setShowDrawer(false);
    };

    const products = [
        { slug: "products/detail", title: "Slip - On Exhaust for Bear 650 - Cone Type", vendor: "Powerage", price: "₹ 19,000", img: "/home/product.webp" },
        { slug: "products/details", title: "Slip - On Exhaust for Bear 650 - Cone Type", vendor: "Powerage", price: "₹ 12,000", img: "/home/product.webp" },
        { slug: "products/details", title: "Slip - On Exhaust for Bear 650 - Cone Type", vendor: "Powerage", price: "₹ 25,000", img: "/home/product.webp" },
        { slug: "products/detail", title: "Slip - On Exhaust for Bear 650 - Cone Type", vendor: "Powerage", price: "₹ 15,000", img: "/home/product.webp" },
    ];

    const sortedProducts = [...products].sort(handleSort);
    const filteredProducts = selectedPrices.length
        ? sortedProducts.filter((p) =>
            selectedPrices.includes(p.price.replace(/[^\d]/g, ""))
        )
        : sortedProducts;

    return (
        <>
            {/* Header */}
            <div className="bg-black p-4 text-white">
                <h3 className="font-semibold text-[20px] uppercase">Interceptor 650 / GT 650</h3>
            </div>

            {/* Filter & Sort Row */}
            <div className="flex justify-between items-center mt-3 px-4">
                <button
                    onClick={() => setShowDrawer(true)}
                    className="md:hidden flex items-center gap-2 px-4 py-2 border"
                >
                    <IoFilterOutline />
                    <span>Filter</span>
                </button>
                <div className="ml-auto">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-2 border border-black text-black"
                    >
                        <option value="">Sort By</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to A</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                        <option value="best">Best Selling</option>
                    </select>
                </div>
            </div>

            {/* Product Grid Layout */}
            <div className="gap-4 grid lg:grid-cols-4 p-4 lg:px-[70px]">
                {/* Sidebar Filter */}
                <div className="hidden lg:block col-span-1 p-3 border rounded">
                    <h4 className="mb-2 pb-2 border-b font-semibold">Filter</h4>
                    <h5 className="mt-2 mb-2 font-semibold">Price</h5>
                    {["12000", "15000", "19000", "25000"].map((price) => (
                        <label key={price} className="flex items-center space-x-2 mb-2">
                            <input
                                type="checkbox"
                                checked={selectedPrices.includes(price)}
                                onChange={() => togglePriceFilter(price)}
                                className="w-4 h-4 accent-black"
                            />
                            <span>₹ {price}</span>
                        </label>
                    ))}
                </div>

                {/* Product Cards */}
                <motion.div
                    layout
                    className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"
                >
                    <AnimatePresence>
                        {loading
                            ? Array.from({ length: 6 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                            : filteredProducts.map((product, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: .8 }}
                                >
                                    <Link href={product.slug}>
                                        <div className="p-4 rounded transition hover:-translate-y-2 duration-300">
                                            <div className="mb-2">
                                                <Image
                                                    src={product.img}
                                                    alt={product.title}
                                                    width={350}
                                                    height={250}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-[12px] text-gray-400 uppercase">
                                                    {product.vendor}
                                                </p>
                                                <h3 className="mt-1 font-semibold">{product.title}</h3>
                                                <p className="mt-1 font-medium">{product.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </motion.div>


            </div>

            <div className="flex justify-end mt-6 px-4 lg:px-[70px] pb-5">
                <div className="flex items-center space-x-2 text-sm">
                    {/* Prev Arrow */}
                    <button
                        className="disabled:opacity-50 px-3 py-2 border rounded"
                        disabled
                    >
                        <RiArrowLeftSLine />
                    </button>

                    {/* Page Numbers */}
                    <button className="bg-black px-3 py-1 border rounded text-white">
                        1
                    </button>
                    <button className="hover:bg-gray-100 px-3 py-1 border rounded">
                        2
                    </button>
                    <button className="hover:bg-gray-100 px-3 py-1 border rounded">
                        3
                    </button>

                    {/* Next Arrow */}
                    <button className="px-3 py-2 border rounded">
                        <RiArrowRightSLine />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {showDrawer && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden top-0 right-0 bottom-0 left-0 z-50 fixed flex flex-col bg-white p-4"
                    >
                        <h4 className="mb-4 font-semibold text-lg">Filter by Price</h4>
                        <div className="flex-1 overflow-y-auto">
                            {["12000", "15000", "19000", "25000"].map((price) => (
                                <label key={price} className="flex items-center space-x-2 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedPrices.includes(price)}
                                        onChange={() => togglePriceFilter(price)}
                                        className="w-4 h-4 accent-black"
                                    />
                                    <span>₹ {price}</span>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleClear}
                                className="px-4 py-2 border border-black rounded text-black"
                            >
                                Clear
                            </button>
                            <button
                                onClick={handleApply}
                                className="bg-black px-4 py-2 rounded text-white"
                            >
                                Apply
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
