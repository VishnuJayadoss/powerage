'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { Autoplay } from "swiper/modules";



export default function ClientSays() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const video = [
        {
            title: 'client',
            image: '/home/banner.webp',
            videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
        },
        {
            title: 'client',
            image: '/home/banner.webp',
            videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
        },
        {
            title: 'client',
            image: '/home/banner.webp',
            videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
        },
        {
            title: 'client',
            image: '/home/banner.webp',
            videoUrl: 'https://www.youtube.com/watch?v=Z6EFEXqRED4',
        },
    ];

    if (!mounted) {
        return null;
    }

    const openModal = (url: string) => {
        // Convert YouTube watch URL to embed format
        const embedUrl = url.includes('watch?v=')
            ? url.replace('watch?v=', 'embed/')
            : url;

        setVideoUrl(embedUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setVideoUrl('');
        setIsOpen(false);
    };

    return (
        <>
            <section className="bg-course lg:pt-[60px] lg:pb-[50px]">
                <div className="mx-auto px-4 text-center container">

                    <h2 className="pt-6 font-bold text-slate-800 text-3xl md:text-4xl">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="p-4 pb-[40px]">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                        }}
                    >
                        {video.map((videos, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4 transition-all duration-300">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={videos.image}
                                            alt={videos.title}
                                            fill
                                            className="w-full object-cover"
                                        />
                                        <div className="z-0 absolute inset-0 bg-black opacity-20"></div>
                                        <button
                                            onClick={() => openModal(videos.videoUrl)}
                                            className="z-10 absolute inset-0 flex justify-center items-center"
                                        >
                                            <span className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12 text-red-600 cursor-pointer">
                                                <FaPlay />
                                            </span>
                                        </button>

                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Modal */}
            {isOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 p-4">
                    <div className="relative bg-white shadow-lg rounded-xl w-full max-w-3xl overflow-hidden">
                        <button
                            onClick={closeModal}
                            className="top-2 right-2 z-10 absolute flex justify-center items-center bg-red-600 rounded-full w-8 h-8 text-white cursor-pointer"
                        >
                            ✕
                        </button>
                        <div className="w-full aspect-video">
                            <iframe
                                src={videoUrl}
                                title="YouTube video"
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
