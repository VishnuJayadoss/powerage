import Image from "next/image";
import Link from "next/link";

export default function Collections() {
    const categories = [
        { title: "Bear 650", img: "/home/banner.webp", slug: "products" },
        { title: "Bear 450", img: "/home/banner.webp", slug: "products" },
        { title: "650 Long", img: "/home/banner.webp", slug: "products" },
    ];

    return (
        <>
            <div className="bg-black">
                <h3 className="mb-6 p-6 font-semibold text-[25px] text-white uppercase">Royal Enfield</h3>
            </div>

            <section className="p-8">
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <Link href={category.slug} key={index}>
                            <div
                                className="relative shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300"
                            >
                                {/* Overlay Content */}
                                <div className="z-10 absolute inset-0 flex flex-col justify-start bg-black/50 p-4 pl-[30px] h-[130px] text-white">
                                    <h3 className="pb-4 font-bold text-[26px]">{category.title}</h3>
                                    <div
                                        className="inline-block bg-red-600 px-5 py-1 rounded-full w-[70px] text-white text-sm"
                                    >
                                        More
                                    </div>
                                </div>

                                {/* Image */}
                                <Image
                                    src={category.img}
                                    alt={category.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
