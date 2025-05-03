'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Detail from './Components/Detail';
import { Skeleton } from "@/components/ui/skeleton";

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

export default function BlogDetailClient({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch blog');

        const json = await res.json();
        if (!json?.data?.[0]) throw new Error('Blog not found');

        setBlog(json.data[0]);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogData();
  }, [slug]);

  if (error) return notFound();
  if (loading) return <BlogLoading />;
  if (!blog) return notFound();

  return <Detail blog={blog} />;
}

function BlogLoading() {
  return (
    <div className="space-y-8 mx-auto px-4 py-10 max-w-4xl">
      <Skeleton className="rounded-xl w-full h-[400px]" />
      <div className="space-y-4">
        <Skeleton className="w-3/4 h-12" />
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-6" />
        <div className="flex gap-2">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-24 h-4" />
        </div>
      </div>
      <Skeleton className="rounded-lg w-full aspect-video" />
      <div className="space-y-4">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
      </div>
    </div>
  );
}