'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Detail from './Components/Detail';

export default function BlogDetailPage() {
    const { slug } = useParams() as { slug: string };
    const [blog, setBlog] = useState<any>(null);
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
