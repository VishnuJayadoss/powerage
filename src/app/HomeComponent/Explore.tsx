'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const bikes = [
    {
        brand: 'Enfield',
        model: '450 Short',
        image: '/home/bike1.webp',
        videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
    },
    {
        brand: 'Enfield',
        model: '450 Long',
        image: '/home/bike2.webp',
        videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
    },
    {
        brand: 'Enfield',
        model: 'Bear 650',
        image: '/home/bike3.webp',
        videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
    },
    {
        brand: 'Enfield',
        model: 'Bear 650',
        image: '/home/bike3.webp',
        videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
    },
];

export default function Explore() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const swiperRef = useRef<SwiperType | null>(null);

    const openModal = (url: string) => {
        const embedUrl = url.includes('watch?v=')
            ? url.replace('watch?v=', 'embed/')
            : url;

        setVideoUrl(embedUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setVideoUrl('');
    };

    return (
        <>
            <section className="bg-explore px-4 md:px-10 py-10">
                <div className="items-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {/* Left Content */}
                    <div >
                        <h2 className="mb-4 font-bold text-white text-3xl sm:text-4xl">
                            EXPLORE OUR <span className="text-red-600">BIKES</span>
                        </h2>
                        <p className="mb-6 text-white">
                            Listen to the legendary sound of Powerage exhausts
                        </p>
                        <div className="hidden lg:block">
                            <div className="flex justify-center lg:justify-start gap-4">
                                <button
                                    className="flex justify-center items-center bg-red-600 rounded-full w-10 h-10 text-white cursor-pointer"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    className="flex justify-center items-center bg-red-600 rounded-full w-10 h-10 text-white cursor-pointer"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Slider */}
                    <div className="w-full">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                            }}
                            modules={[Navigation]}
                        >
                            {bikes.map((bike, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative rounded-xl overflow-hidden">
                                        <Image
                                            src={bike.image}
                                            alt={bike.model}
                                            width={500}
                                            height={300}
                                            className="w-full h-100 object-cover"
                                        />

                                        {/* Text Overlay */}
                                        <div className="top-4 left-4 z-10 absolute">
                                            <h3 className="font-semibold text-white text-lg">{bike.brand}</h3>
                                            <h4 className="text-white text-sm">{bike.model}</h4>
                                        </div>

                                        {/* Play Button Overlay */}
                                        <button
                                            onClick={() => openModal(bike.videoUrl)}
                                            className="z-20 absolute inset-0 flex justify-center items-center"
                                        >
                                            <span className="flex justify-center items-center bg-red-600 shadow-lg rounded-full w-14 h-14 text-white cursor-pointer">
                                                <FaPlay className="ml-1" />
                                            </span>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="lg:hidden block">
                            <div className="flex justify-center lg:justify-start gap-4 pt-5">
                                <button
                                    className="flex justify-center items-center bg-red-600 rounded-full w-10 h-10 text-white cursor-pointer"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    className="flex justify-center items-center bg-red-600 rounded-full w-10 h-10 text-white cursor-pointer"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 p-4">
                    <div className="relative bg-black rounded-xl w-full max-w-4xl overflow-hidden">
                        <button
                            onClick={closeModal}
                            className="top-2 right-2 z-10 absolute flex justify-center items-center bg-red-600 rounded-full w-8 h-8 text-white cursor-pointer"
                        >
                            ✕
                        </button>
                        <div className="w-full aspect-video">
                            <iframe
                                src={videoUrl}
                                title="YouTube Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
