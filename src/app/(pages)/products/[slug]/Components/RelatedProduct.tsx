'use client';

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function RelatedProduct() {

    const swiperRef = useRef<SwiperType | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) {
        return null; // Return null to avoid rendering the Swiper during SSR
    }

    return (
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
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-4 h-[320px] hover:-translate-y-2 duration-300">
                            <div className="seller-card-img">
                                <Image src={product.image} alt="product" width={350} height={250} />
                            </div>
                            <div className="seller-content">
                                <div className="pt-2 pb-2 vendor">
                                    <p className="text-[12px] text-gray-400 uppercase">{product.vendor}</p>
                                </div>
                                <div className="pb-2 card-title">
                                    <h3 className="cal-sans">{product.title}</h3>
                                </div>
                                <div className="price">
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
