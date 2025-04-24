import Image from "next/image";
import Link from "next/link";

export default function NewlyLaunched() {
    return (
        <>
            <section className="p-8">
                <h3 className="mb-6 font-semibold text-[25px]">NEWLY LAUNCHED</h3>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Bear 650", img: "/home/banner.webp" },
                        { title: "Bear 450", img: "/home/banner.webp" },
                        { title: "650 Long", img: "/home/banner.webp" },
                    ].map((bike, idx) => (
                        <div key={idx} className="relative shadow-md rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                            {/* Overlay Content */}
                            <div className="z-10 absolute inset-0 flex flex-col justify-start bg-black/50 p-4 pl-[30px] h-[130px] text-white">
                                <h3 className="pb-1 font-bold text-[26px]">Enfield</h3>
                                <p className="mb-3 text-sm">{bike.title}</p>
                                <Link
                                    href="#3"
                                    className="inline-block bg-red-600 px-5 py-1 rounded-full w-[70px] text-white text-sm"
                                >
                                    More
                                </Link>
                            </div>

                            {/* Image */}
                            <Image
                                src={bike.img}
                                alt={bike.title}
                                width={1000}
                                height={1000}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}