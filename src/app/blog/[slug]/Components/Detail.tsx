'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type BlogProps = {
    blog: {
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
    };
};

export default function Detail({ blog }: BlogProps) {
    const formattedDate = blog.created_at
        ? format(new Date(blog.created_at), 'MMMM dd, yyyy')
        : '';

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: blog.blog_banner_title,
                    text: blog.blog_banner_desc,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success('Link copied to clipboard');
            }
        } catch (error) {
            console.error('Error sharing:', error);
            toast.error('Failed to share');
        }
    };

    return (
        <article className="mx-auto px-4 py-10 max-w-4xl">
            <div className="relative bg-muted mb-8 rounded-xl w-full h-[400px] overflow-hidden">
                {blog.blog_banner_img && (
                    <Image
                        src={blog.blog_banner_img}
                        alt={blog.blog_banner_img_alt || 'Blog banner'}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
            </div>

            <header className="mb-10">
                <div className="flex justify-between items-center gap-4 mb-6">
                    <h1 className="font-bold text-4xl tracking-tight">{blog.blog_banner_title}</h1>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleShare}
                        className="shrink-0"
                    >
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>

                <p className="mb-6 text-muted-foreground text-xl">{blog.blog_banner_desc}</p>

                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span>{blog.blog_user}</span>
                    {formattedDate && (
                        <>
                            <span>•</span>
                            <time dateTime={blog.created_at}>{formattedDate}</time>
                        </>
                    )}
                </div>
            </header>

            {blog.blog_main_img && (
                <div className="mb-10">
                    <div className="relative bg-muted rounded-lg w-full aspect-video overflow-hidden">
                        <Image
                            src={blog.blog_main_img}
                            alt={blog.blog_main_img_alt || 'Blog main image'}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )}

            <div
                className="dark:prose-invert max-w-none prose prose-lg"
                dangerouslySetInnerHTML={{ __html: blog.blog_desc }}
            />
        </article>
    );
}