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

async function getBlogData(slug: string): Promise<BlogData> {
    const res = await fetch(`https://your-api-url.com/api/blog/${slug}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch blog data');
    return res.json();
}

// Dynamic metadata using the blog's meta info
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const blog = await getBlogData(params.slug);
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
                },
            ],
        },
    };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = await getBlogData(params.slug);
    return <Detail blog={blog} />;
}
