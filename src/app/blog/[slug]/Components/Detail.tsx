'use client';
import { FaShare } from 'react-icons/fa';

type BlogData = {
    blog_name: string;
    created_at: string;
    blog_banner_img: string;
    blog_banner_title: string;
    blog_desc: string;
    blog_desc2: string;
};

const handleNativeShare = () => {
    if (navigator.share) {
        navigator
            .share({
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

export default function Detail({ blog }: { blog: BlogData }) {
    const formattedDate = new Date(blog.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <section
                className="blogd-bg"
                style={{
                    backgroundImage: `url(https://saddlebrown-stingray-368718.hostingersite.com/${blog.blog_banner_img})`,
                }}
            >
                <div className="bottom-[100px] left-[50px] z-2 absolute text-white">
                    <h3 className="pb-4 text-[40px] uppercase">{blog.blog_banner_title}</h3>
                </div>
            </section>

            <section className="px-20 py-5">
                <h2 className="pb-3 font-semibold text-[36px]">{blog.blog_name}</h2>

                <p className="pb-3 text-gray-500">{formattedDate}</p>

                <div
                    className="pb-3 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: blog.blog_desc }}
                ></div>

                <div
                    className="pb-3 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: blog.blog_desc2 }}
                ></div>

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
