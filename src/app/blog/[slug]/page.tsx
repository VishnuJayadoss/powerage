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
    try {
        const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${params.slug}`);

        if (!res.ok) { // handle HTTP errors
            throw new Error(`Failed to fetch blog data: ${res.status}`);
        }
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
    } catch (error) {
        // Handle errors during fetching or processing.  Important for robustness.
        console.error("Error in generateMetadata:", error);
        return { // Provide fallback metadata to prevent the entire page from crashing.
            title: 'Powerage | Blog',
            description: 'Error fetching blog data',
        };
    }
}

export default async function Blogdetail({ params }: { params: { slug: string } }) {
    try {
        const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${params.slug}`, {
            cache: 'no-store', // disable caching for fresh data
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog detail: ${res.status}`);
        }
        const json = await res.json();

        if (!json.data || json.data.length === 0) {
            notFound();
        }

        const blog: BlogData = json.data[0];

        return <Detail blog={blog} />;
    } catch (error) {
        console.error("Error in Blogdetail:", error);
        //  Consider showing a user-friendly error page or message here.
        notFound(); // Or a custom error page.  This example uses notFound
    }
}
