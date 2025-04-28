'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <section className="px-4 md:px-10 lg:px-20 py-8">
            {/* Heading */}
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-2xl md:text-3xl">Your cart</h2>
                <a href="#" className="text-red-500 text-sm hover:underline whitespace-nowrap">Continue shopping</a>
            </div>

            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-12 mt-10 pb-3 border-gray-300 border-b text-gray-500 text-sm uppercase">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-end">Total</div>
            </div>

            {/* Cart Item */}
            <div className="items-center gap-4 grid grid-cols-1 lg:grid-cols-12 py-6 border-gray-300 border-b">
                {/* Product Info */}
                <div className="flex items-center gap-4 col-span-6">
                    <Image src="/home/product.webp" alt="Product" width={80} height={80} className="rounded w-20 h-20 object-cover" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase">Powerage</p>
                        <h3 className="font-medium text-sm md:text-base">Slip-Ons Exhaust for RE HIMALAYAN 450</h3>
                        <p className="text-sm">Rs. 13,990.00</p>
                    </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex justify-start lg:justify-center items-center col-span-3">
                    <div className="flex items-center border rounded overflow-hidden">
                        <button 
                            onClick={handleDecrease} 
                            className="hover:bg-gray-200 px-3 py-1 text-lg"
                        >
                            -
                        </button>
                        <div className="px-6 py-1 min-w-[40px] text-center">{quantity}</div>
                        <button 
                            onClick={handleIncrease} 
                            className="hover:bg-gray-200 px-3 py-1 text-lg"
                        >
                            +
                        </button>
                    </div>
                    <button className="ml-4 text-red-500 hover:text-red-700 text-xl">
                        🗑️
                    </button>
                </div>

                {/* Total Price */}
                <div className="col-span-3 font-medium text-sm md:text-base text-end">
                    Rs. {(13990 * quantity).toLocaleString("en-IN")}
                </div>
            </div>

            {/* Total Section */}
            <div className="pt-6 text-end">
                <p className="font-semibold text-lg md:text-xl">
                    Estimated total
                    <span className="ml-2 text-gray-500">
                        Rs. {(13990 * quantity).toLocaleString("en-IN")}
                    </span>
                </p>

                <p className="pt-4 pb-6 text-sm">
                    Taxes, discounts, and <Link href="#" className="text-red-600 underline">shipping</Link> calculated at checkout.
                </p>

                <Link href="#" className="inline-block bg-red-600 hover:bg-red-700 px-20 py-3 rounded font-medium text-white text-sm">
                    Checkout
                </Link>
            </div>
        </section>
    );
}
