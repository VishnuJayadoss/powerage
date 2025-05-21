'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SkeletonCard() {
    return (
        <div className="bg-[#ececec] p-3 rounded animate-pulse">
            <div className="flex justify-between pt-3">
                <div className="bg-gray-300 rounded w-24 h-4" />
                <div className="bg-gray-300 rounded w-20 h-8" />
            </div>
            <div className="pt-4 border-red-600 border-b" />
            <div className="space-y-3 px-8 py-3">
                <div className="flex justify-between">
                    <div className="bg-gray-300 rounded w-20 h-4" />
                    <div className="bg-gray-300 rounded w-14 h-4" />
                </div>
                <div className="flex justify-between">
                    <div className="bg-gray-300 rounded w-20 h-4" />
                    <div className="bg-gray-300 rounded w-14 h-4" />
                </div>
                <div className="flex justify-between">
                    <div className="bg-gray-300 rounded w-20 h-4" />
                    <div className="bg-gray-300 rounded w-14 h-4" />
                </div>

                <div className="bg-gray-300 rounded w-32 h-6" />

                <div className="flex gap-4 pt-4">
                    <div className="bg-gray-300 rounded w-[150px] h-[150px]" />
                    <div className="flex-1 space-y-2">
                        <div className="bg-gray-300 rounded w-full h-4" />
                        <div className="bg-gray-300 rounded w-16 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function OrderDetail() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const orderCards = new Array(6).fill(null);

    const orders = [
        {
            status: 'Order Confirmed',
            orderid: '#1234',
            date: '27/04/2025',
            total: '₹ 13000',
            items: [
                {
                    name: 'Slip - On Exhaust for Bear 650 - Cone Type',
                    img: '/home/banner.webp',
                    qty: 'QTY 1'
                },
                {
                    name: 'Slip - On Exhaust for Bear 650',
                    img: '/home/banner.webp',
                    qty: 'QTY 2'
                }
            ]
        },

        {
            status: 'Order Pending',
            orderid: '#1234',
            date: '27/04/2025',
            total: '₹ 13000',
            items: [
                {
                    name: 'Slip - On Exhaust for Bear 650',
                    img: '/home/banner.webp',
                    qty: 'QTY 1'
                },
            ]
        }
    ];

    return (
        <section className="px-8 py-4">
            <h2 className="font-semibold text-[22px]">Orders</h2>

            <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 transition-opacity duration-500 ease-in-out">
                {loading
                    ? orderCards.map((_, idx) => <SkeletonCard key={idx} />)
                    : orders.map((order, idx) => (
                        <div
                            key={idx}
                            className="bg-[#ececec] p-3 rounded transition-opacity duration-500 ease-in-out card"
                        >
                            <div className="flex justify-between pt-3">
                                <div>
                                    <p>{order.status}</p>
                                </div>
                                <div>
                                    <Link href="#3" className="bg-red-600 p-2 text-white">
                                        Track Order
                                    </Link>
                                </div>
                            </div>
                            <div className="pt-4 border-red-600 border-b" />
                            <div className="px-8 py-3">
                                <div className="flex justify-between pb-2">
                                    <p>Order Id</p>
                                    <p>{order.orderid}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p>Placed on</p>
                                    <p>{order.date}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p>Total</p>
                                    <p>{order.total}</p>
                                </div>

                                <p className="text-[22px] text-red-600">Total Items</p>

                                <div className={`max-h-[100px] overflow-y-auto pr-1 ${order.items.length > 1 ? 'scrollbar-none scroll-smooth' : ''}`}>
                                    {order.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex justify-between items-center gap-4 pt-4">
                                            <div>
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={150}
                                                    height={150}
                                                />
                                            </div>
                                            <div>
                                                <p>{item.name}</p>
                                                <p className="font-semibold">{item.qty}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
