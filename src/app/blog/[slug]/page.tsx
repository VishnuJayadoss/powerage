import { Metadata, ResolvingMetadata } from 'next';
import BlogDetailClient from './client';

type Blog = {
  meta_title?: string;
  meta_desc?: string;
  meta_keyword?: string;
  og_title?: string;
  og_desc?: string;
  og_image?: string;
  blog_banner_title: string;
  blog_banner_desc: string;
  blog_main_img?: string;
};

type Props = {
  params: {
    slug: string;
  };
};

async function fetchBlog(slug: string) {
  const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const json = await fetchBlog(params.slug);
    if (!json?.data?.[0]) throw new Error('Blog not found');

    const blog: Blog = json.data[0];
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: blog.meta_title || blog.blog_banner_title || 'Blog Detail',
      description: blog.meta_desc || blog.blog_banner_desc || '',
      keywords: blog.meta_keyword,
      openGraph: {
        title: blog.og_title || blog.meta_title || blog.blog_banner_title,
        description: blog.og_desc || blog.meta_desc || blog.blog_banner_desc,
        images: [
          ...(blog.og_image ? [blog.og_image] : []),
          ...(blog.blog_main_img ? [blog.blog_main_img] : []),
          ...previousImages,
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.og_title || blog.meta_title || blog.blog_banner_title,
        description: blog.og_desc || blog.meta_desc || blog.blog_banner_desc,
        images: blog.og_image || blog.blog_main_img,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog',
      description: 'Read our latest blog posts',
    };
  }
}

export default function BlogDetailPage({ params }: Props) {
  return <BlogDetailClient slug={params.slug} />;
}