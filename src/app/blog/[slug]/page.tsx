'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Head from 'next/head'; // ✅ import Head
import Detail from './Components/Detail';

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

    return (
        <>
            {/* ✅ Dynamic Metadata using next/head */}
            <Head>
                <title>{blog.meta_title || 'Powerage | Blog'}</title>
                <meta name="description" content={blog.meta_desc || 'Powerage | Blog'} />
                <meta name="keywords" content={blog.meta_keyword || 'Powerage, Blog'} />

                {/* Open Graph / Social Meta */}
                <meta property="og:title" content={blog.og_title || blog.blog_name} />
                <meta property="og:description" content={blog.og_desc || blog.meta_desc || ''} />
                {blog.og_image && (
                    <meta property="og:image" content={blog.og_image} />
                )}
                <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
                <meta property="og:type" content="article" />
            </Head>

            <Detail blog={blog} />
        </>
    );
}
