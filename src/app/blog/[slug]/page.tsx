// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import Detail from './Components/Detail';

type Props = {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: Props,
    // parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = params;

    // fetch data
    const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`);
    const product = await res.json();

    return {
        title: product.metatitle,
        description: product.metadesc || '',
    };
}

export default async function Page({ params }: Props) {
    const { slug } = params;

    const res = await fetch(`https://saddlebrown-stingray-368718.hostingersite.com/api/blog/${slug}`);
    const blog = await res.json();

    return <Detail blog={blog} />;
}
