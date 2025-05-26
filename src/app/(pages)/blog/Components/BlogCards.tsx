"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
    slug: string;
    blog_main_img: string;
    blog_name: string;
    created_at: string;
    blog_user?: string;
    blog_banner_desc?: string;
};

export default function BlogCards() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Blog Data:", data);
                setBlogs(data?.data || []);
            })
            .catch((err) => {
                console.error("Failed to fetch blogs:", err);
                setBlogs([]); // fallback
            });
    }, []);

    return (
        <section className="bg-[#f4f4f4] px-6 py-10">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogs.length > 0 ? (
                    blogs.map((card) => (
                        <div
                            key={card.slug}
                            className="bg-white shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
                        >
                            <Link href={`/blog/${card.slug}`}>
                                <div className="relative w-full h-[300px]">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${card.blog_main_img}`}
                                        alt={card.blog_name || "Blog image"}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="bg-black px-6 py-6 text-white">
                                    <h4 className="mb-2 font-semibold text-xl">{card.blog_name}</h4>
                                    <div className="flex flex-wrap gap-3 mb-3 text-gray-400 text-sm">
                                        <span>
                                            {card.created_at
                                                ? new Date(card.created_at).toDateString()
                                                : "Date not available"}
                                        </span>
                                        <span className="mx-1">•</span>
                                        <span>{card.blog_user || "Admin"}</span>
                                    </div>
                                    <p
                                        className="text-gray-300 text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: card.blog_banner_desc || "",
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="col-span-3 text-gray-500 text-center">No blog data available.</p>
                )}
            </div>
        </section>
    );
}
