'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Detail from './Components/Detail';

// ✅ Define a proper Blog type
type Blog = {
    blog_banner_img: string;
    blog_banner_img_alt: string;
    blog_banner_title: string;
    blog_banner_desc: string;
    blog_user: string;
    blog_name: string;
    blog_desc: string;
    blog_main_img: string;
    blog_main_img_alt: string;
    created_at: string;
    meta_title?: string;
    meta_desc?: string;
    meta_keyword?: string;
    og_title?: string;
    og_desc?: string;
    og_image?: string;
};

export default function BlogDetailPage() {
    const { slug } = useParams() as { slug: string };
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`, {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    setError(true);
                    return;
                }

                const json = await res.json();
                if (!json?.data || !Array.isArray(json.data) || json.data.length === 0) {
                    setError(true);
                    return;
                }

                setBlog(json.data[0]);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError(true);
            }
        }

        fetchBlogData();
    }, [slug]);

    if (error) return notFound();
    if (!blog) return <p>Loading...</p>;

    return <Detail blog={blog} />;
}
