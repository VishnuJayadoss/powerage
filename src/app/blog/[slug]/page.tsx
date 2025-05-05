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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${params.slug}`);
    const json = await res.json();

    if (!json.data || json.data.length === 0) {
        return {
            title: 'Powerage | Blog',
            description: 'Blog not found',
        };
    }

    const blog: BlogData = json.data[0];

    return {
        title: blog.meta_title,
        description: blog.meta_desc,
    };
}

export default async function Blogdetail({ params }: { params: { slug: string } }) {
    const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${params.slug}`, {
        cache: 'no-store', // disable caching for fresh data
    });

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
        notFound();
    }

    const blog: BlogData = json.data[0];

    return <Detail blog={blog} />;
}
