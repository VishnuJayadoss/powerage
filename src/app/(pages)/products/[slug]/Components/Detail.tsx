'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Detail() {
    const [quantity, setQuantity] = useState(1);
    
    // Images array
    const images = [
        "/home/banner.webp",
        "/home/product.webp",
        "/home/banner.webp",
        "/home/3.webp"
    ];

    // Main selected image
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <>
            <section className="bg-black px-6 lg:px-30 py-8 pt-10 md:pt-40">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {/* Product Image Sticky */}
                    <div className="relative">
                        <div className="top-30 sticky">
                            <div className="pb-4">
                                <Image 
                                    src={selectedImage} 
                                    alt="Selected Product Image" 
                                    width={1000} 
                                    height={1000} 
                                    className="w-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Slider */}
                            <div className="thumbnail-img">
                                <Swiper
                                    spaceBetween={1}
                                    slidesPerView={4}
                                    className="w-full"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <button onClick={() => setSelectedImage(img)} className="focus:outline-none">
                                                <Image 
                                                    src={img} 
                                                    alt={`Thumbnail ${index}`} 
                                                    width={100} 
                                                    height={100} 
                                                    className={` border ${selectedImage === img ? 'border-red-500' : 'border-transparent'}`} 
                                                />
                                            </button>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="text-white">
                        <h2 className="pb-3 text-[30px]">Slip-Ons Exhaust for RE 650 Twins Polish Finish</h2>

                        <p className="text-[18px]">Rs. 16,990.00</p>

                        <p className="pt-3 pb-3 text-[12px]">
                            <Link href="" className="text-red-600">Shipping </Link> calculated at checkout.
                        </p>

                        <ul className="pl-5 leading-[30px] list-disc">
                            <li>Compatible for RE Interceptor / GT 650</li>
                            <li>Its unique design makes a deep resonant sound and enables it to obtain the maximum output.</li>
                            <li>Increase in Performance, Horsepower & Torque</li>
                            <li>Hand crafted, Uni-construction styling</li>
                            <li>Polish Finish</li>
                            <li>Synthetic wool for acoustic insulation and long life</li>
                            <li>Detachable dB reducer</li>
                            <li>Baffle core for back pressure and efficiency</li>
                            <li>Completely made of Stainless steel (Nuts, Bolts, Clamp, Core)</li>
                            <li>Dyno tested</li>
                            <li>Aesthetic, similar to OE</li>
                            <li>Length 54 cm, Diameter 10.2 cm, Weight 6 Kg.</li>
                            <li>+2 Bhp increase in power</li>
                        </ul>

                        <div className="flex flex-col items-start gap-2 pt-3 pb-4">
                            <label className="text-sm">Quantity</label>
                            <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
                                <button
                                    onClick={decreaseQuantity}
                                    className="hover:bg-gray-700 px-4 py-2 text-xl transition"
                                >
                                    -
                                </button>
                                <div className="px-6 py-2 text-lg">{quantity}</div>
                                <button
                                    onClick={increaseQuantity}
                                    className="hover:bg-gray-700 px-4 py-2 text-xl transition"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link href="/cart" className="py-3 border border-red-600 rounded text-center">Add to Cart</Link>
                            <Link href="/checkout" className="bg-red-600 py-3 rounded text-center">Buy it Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
