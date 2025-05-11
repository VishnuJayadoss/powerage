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
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

// Correct type for generateMetadata
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        return {
            title: 'Blog not found',
            description: 'No blog content found.',
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

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        notFound(); // Triggers 404
    }

    return <Detail blog={blog} />;
}
