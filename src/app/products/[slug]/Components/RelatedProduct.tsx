'use client';

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";

export default function RelatedProduct() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);

    const products = [
        {
            image: "/home/product.webp",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000",
        },
        {
            image: "/home/product.webp",
            title: "Slip - On Exhaust for Interceptor 650",
            vendor: "Powerage",
            price: "₹ 18,500",
        },
        {
            image: "/home/product.webp",
            title: "Full System Exhaust for GT 650",
            vendor: "Powerage",
            price: "₹ 25,000",
        },
        {
            image: "/home/product.webp",
            title: "Performance Air Filter",
            vendor: "Powerage",
            price: "₹ 3,500",
        },
        {
            image: "/home/product.webp",
            title: "Performance Air Filter",
            vendor: "Powerage",
            price: "₹ 3,500",
        },
    ];

    return (
        <>
            <div className="bg-seller p-6 lg:pt-[40px] lg:pr-[70px] lg:pb-[40px] lg:pl-[70px]">
                {/* Heading and Controls */}
                <div className="flex justify-between items-center pb-6">
                    <h3 className="font-semibold text-[20px] lg:text-[30px] uppercase">Related Product</h3>
                </div>

                {/* Swiper */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#e6e2e2] p-4 rounded h-[320px] hover:-translate-y-2 duration-300">
                                <div className="seller-card-img">
                                    <Image src={product.image} alt="product" width={350} height={250} />
                                </div>
                                <div className="text-center seller-content">
                                    <div className="pb-2 card-title">
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className="pb-2 vendor">
                                        <p className="text-[12px] text-gray-400 uppercase">{product.vendor}</p>
                                    </div>
                                    <div className="price">
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="swiper-navigation">
                    <button ref={prevRef} className="swiper-button-prev">Prev</button>
                    <button ref={nextRef} className="swiper-button-next">Next</button>
                </div>
            </div>
        </>
    );
}
