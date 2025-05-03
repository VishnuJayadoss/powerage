// src/app/blog/[slug]/page.tsx

import './Components/style.css';
import Detail from './Components/Detail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

async function getBlogData(slug: string) {
    try {
        const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`, {
            cache: 'no-store',
        });

        if (!res.ok) return null;

        const json = await res.json();

        if (!json?.data || !Array.isArray(json.data) || json.data.length === 0) {
            return null;
        }

        return json.data[0];
    } catch (error) {
        console.error('Error fetching blog:', error);
        return null;
    }
}

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog post does not exist.',
        };
    }

    return {
        title: blog.meta_title || 'Powerage | Blog',
        description: blog.meta_desc || 'Powerage | Blog',
        keywords: blog.meta_keyword || 'Powerage | Blog',
        openGraph: {
            title: blog.og_title || blog.meta_title || blog.title,
            description: blog.og_desc || blog.meta_desc || 'Powerage | Blog',
            images: blog.og_image ? [blog.og_image] : [],
        },
    };
}

export default async function BlogDetailPage(
    { params }: { params: { slug: string } }
) {
    const blog = await getBlogData(params.slug);

    if (!blog) return notFound();

    return <Detail blog={blog} />;
}
