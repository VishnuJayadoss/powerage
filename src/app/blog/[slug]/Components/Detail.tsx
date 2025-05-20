'use client';
import { FaShare } from 'react-icons/fa';

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

export default function Detail() {

    return (
        <>
            <section className="px-20 py-5">
                <h2 className="pb-3 font-semibold text-[36px]">High Quality Material</h2>

                <p className="pb-3 text-gray-500">April 3, 2025</p>

                <p className="pb-3 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam numquam ut laboriosam modi. Consequatur molestias cupiditate provident magnam fugiat! Officiis harum aperiam, suscipit repellat quam ut ea facilis unde.
                </p>

                <button onClick={handleNativeShare} className="px-6 py-1 border border-red-600 hover:border-black rounded text-red-600 hover:text-black cursor-pointer">
                    <span className='flex items-center gap-2'>
                        <span><FaShare /></span>
                        <span>
                            Share
                        </span>
                    </span>
                </button>

            </section>
        </>
    );
} 