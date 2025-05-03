'use client';

import { FaShare } from 'react-icons/fa';

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
};

const handleNativeShare = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Check this out!',
            text: 'Look at this awesome content!',
            url: window.location.href,
        })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        alert('Web Share API not supported in this browser.');
    }
};

export default function Detail({ blog }: { blog: Blog }) {
    return (
        <>
            <section
                className="blogd-bg"
                style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${blog.blog_banner_img}')`,
                }}
            >
                <div className="bottom-[100px] left-[50px] z-2 absolute text-white">
                    <h3 className="pb-4 text-[40px] uppercase">{blog.blog_banner_title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: blog.blog_banner_desc }} />
                </div>
            </section>

            <section className="px-20 py-5">
                <h2 className="pb-3 font-semibold text-[36px]">{blog.blog_name}</h2>
                <p className="pb-3 text-gray-500">
                    {blog.created_at ? new Date(blog.created_at).toDateString() : 'Date not available'}
                </p>
                <div
                    className="pb-3 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: blog.blog_desc }}
                />

                <button
                    onClick={handleNativeShare}
                    className="px-6 py-1 border border-red-600 hover:border-black rounded text-red-600 hover:text-black cursor-pointer"
                >
                    <span className="flex items-center gap-2">
                        <FaShare />
                        <span>Share</span>
                    </span>
                </button>
            </section>
        </>
    );
}
