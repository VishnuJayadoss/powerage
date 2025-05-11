import { notFound } from 'next/navigation';
import Detail from './Components/Detail';
import type { Metadata } from 'next';

type BlogData = {
    meta_title: string;
    meta_desc: string;
    blog_name: string;
    created_at: string;
    blog_banner_img: string;
    blog_banner_title: string;
    blog_desc: string;
    blog_desc2: string;
};

type Params = { slug: string };

async function getBlogData(slug: string): Promise<BlogData | null> {
    try {
        const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog data: ${res.status}`);
        }

        const json = await res.json();

        if (!json.data || json.data.length === 0) {
            return null;
        }

        return json.data[0] as BlogData;
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        return {
            title: 'Powerage | Blog',
            description: 'Blog not found',
        };
    }

    return {
        title: blog.meta_title,
        description: blog.meta_desc,
    };
}

export default async function Blogdetail({ params }: { params: Params }) {
    const blog = await getBlogData(params.slug);

    if (!blog) {
        notFound();
    }

    return <Detail blog={blog} />;
}
