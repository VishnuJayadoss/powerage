import Image from "next/image";
import Link from "next/link";

const blogcard = [
    {
        cardimg: '/home/banner.webp',
        title: 'High Quality Material',
        date: 'April 3, 2025',
        name: 'Panik Enterprises',
        desc: `All our systems are made from high grade 304 stainless steel for a long life
        of augmented performance. And also use high quality thermal and acoustic
        insulation.`,
        slug: '/blog/detail'
    },
    {
        cardimg: '/home/banner.webp',
        title: 'High Quality Material',
        date: 'April 3, 2025',
        name: 'Panik Enterprises',
        desc: `All our systems are made from high grade 304 stainless steel for a long life
        of augmented performance. And also use high quality thermal and acoustic
        insulation.`,
        slug: '/blog/detail'
    },
    {
        cardimg: '/home/banner.webp',
        title: 'High Quality Material',
        date: 'April 3, 2025',
        name: 'Panik Enterprises',
        desc: `All our systems are made from high grade 304 stainless steel for a long life
        of augmented performance. And also use high quality thermal and acoustic
        insulation.`,
        slug: '/blog/detail'
    }
];

export default function BlogCards() {
    return (
        <section className="bg-[#f4f4f4] px-30 py-10">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogcard.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:-translate-y-2 duration-300"
                    >
                        <Link href={card.slug}>
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src={card.cardimg}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-black px-6 py-6 text-white">
                                <h4 className="mb-2 font-semibold text-xl">{card.title}</h4>

                                <div className="flex flex-wrap gap-3 mb-3 text-gray-400 text-sm">
                                    <span>{card.date}</span>
                                    <span className="mx-1">•</span>
                                    <span>{card.name}</span>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
