'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

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

export default function ClientSays() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

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
            <section className="bg-course">
                <div className="mx-auto px-4 text-center container">

                    <h2 className="pt-5 pb-3 font-bold text-slate-800 text-3xl md:text-4xl">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="p-5 pb-[40px]">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {video.map((videos, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-md p-4 rounded-xl transition-all duration-300">
                                    <div className="relative rounded-xl aspect-video overflow-hidden">
                                        <Image
                                            src={videos.image}
                                            alt={videos.title}
                                            fill
                                            className="object-cover"
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
