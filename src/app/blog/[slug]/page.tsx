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

// Fetch blog data from API
async function getBlogData(slug: string): Promise<BlogData | null> {
  try {
    const res = await fetch(
      `https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`,
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Metadata generator
type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return {
      title: 'Blog not found',
      description: 'No description available.',
    };
  }

  return {
    title: blog.meta_title,
    description: blog.meta_desc,
  };
}

// Page component
export default async function BlogPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) notFound();

  return <Detail blog={blog} />;
}
