"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const mockData = {
    categories: ["Royal Enfield", "Hero", "Honda", "Exhaust Accessories"],
    products: [
        "Slip - On Exhaust for Bear 650 - Cone Type",
        "Slip - On Exhaust for Bear 650 ",
    ],
};

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const filteredCategories = mockData.categories.filter((c) =>
        c.toLowerCase().includes(query.toLowerCase())
    );

    const filteredProducts = mockData.products.filter((p) =>
        p.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <IoSearch
                className="hover:text-red-600 cursor-pointer"
                onClick={() => setIsOpen(true)}
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="z-40 fixed inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="top-0 right-0 z-50 absolute bg-black shadow-lg p-4 w-full sm:w-[400px] h-full text-white"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-xl">Search</h2>
                                <X
                                    className="hover:text-red-600 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Search categories or products..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="mb-4 px-4 py-2 border rounded-md w-full text-[18px]"
                            />

                            {query.length > 0 && (
                                <div className="text-[18px]">
                                    <h3 className="mb-2 font-medium">Categories</h3>
                                    {filteredCategories.length ? (
                                        <ul className="mb-4">
                                            {filteredCategories.map((cat, i) => (
                                                <li key={i} className="py-1 pt-2 pb-2 border-b">
                                                    {cat}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mb-4 text-gray-500">No categories found.</p>
                                    )}

                                    <h3 className="mb-2 font-medium">Products</h3>
                                    {filteredProducts.length ? (
                                        <ul>
                                            {filteredProducts.map((prod, i) => (
                                                <li key={i} className="py-1 pt-2 pb-2 border-b">
                                                    {prod}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500">No products found.</p>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
