import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Detail from './Components/Detail';

// Define the expected structure of `params`
type PageProps = {
  params: {
    slug: string;
  };
};

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

// Use correct type in generateMetadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

// Use correct type in page component
export default async function Blogdetail({ params }: PageProps) {
  const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${params.slug}`, {
    cache: 'no-store',
  });

  const json = await res.json();

  if (!json.data || json.data.length === 0) {
    notFound();
  }

  const blog: BlogData = json.data[0];

  return <Detail blog={blog} />;
}
