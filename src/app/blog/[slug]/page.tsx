import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Detail from './Components/Detail';

type BlogPageProps = {
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

// ✅ No more name conflict here
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
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

// ✅ And here too
export default async function Blogdetail({ params }: BlogPageProps) {
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
