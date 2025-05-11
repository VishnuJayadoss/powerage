// src/app/blog/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Detail from './Components/Detail';

type BlogData = {
    blog_name: string;
    created_at: string;
    blog_banner_img: string;
    blog_banner_title: string;
    blog_desc: string;
    blog_desc2: string;
    meta_title: string;
    meta_desc: string;
};

async function getBlogData(slug: string): Promise<BlogData | null> {
    try {
        const res = await fetch(`https://your-api-url.com/api/blog/${slug}`, {
            cache: 'no-store',
        });

        if (!res.ok) return null;

        return await res.json();
    } catch {
        return null;
    }
}

// ✅ Correct usage of generateMetadata with destructured params
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        return {
            title: 'Not Found',
            description: 'Blog not found.',
        };
    }

    return {
        title: blog.meta_title,
        description: blog.meta_desc,
        openGraph: {
            title: blog.meta_title,
            description: blog.meta_desc,
            url: `https://your-site.com/blog/${params.slug}`,
            images: [
                {
                    url: `https://saddlebrown-stingray-368718.hostingersite.com/${blog.blog_banner_img}`,
                    alt: blog.blog_banner_title,
                },
            ],
        },
    };
}

// ✅ Correct usage of page component with { params }
export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        notFound(); // Show 404 page
    }

    return <Detail blog={blog} />;
}
