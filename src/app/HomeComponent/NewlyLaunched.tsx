import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function NewlyLaunched() {
    return (
        <section className="px-8 py-8">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div>
                    <p className="text-red-600">Shop</p>
                    <h3 className="pb-3 font-black text-[40px] leading-[40px]">
                        Newly<br />Launched
                    </h3>
                    <div className="group relative rounded h-[400px] overflow-hidden">
                        <Image
                            src="/home/banner.webp"
                            alt="category"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500 transform"
                        />
                        <div className="z-0 absolute inset-0 bg-black opacity-40" />
                        <div className="top-4 left-5 z-10 absolute">
                            <h3 className="font-black text-[25px] text-white">Royal Enfield</h3>
                            <p className="text-[20px] text-white">GT</p>
                            <div className="hidden group-hover:flex items-center gap-2 bg-red-600 mt-2 p-2 px-4 rounded-3xl text-white transition-all duration-300">
                                <Link href="/category" className="flex items-center gap-2">
                                    Discover More
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div>
                    <div className="group relative mt-[30px] rounded h-[400px] overflow-hidden">
                        <Image
                            src="/home/banner.webp"
                            alt="category"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500 transform"
                        />
                        <div className="z-0 absolute inset-0 bg-black opacity-40" />
                        <div className="top-4 left-4 z-10 absolute">
                            <h3 className="font-black text-[25px] text-white">Honda</h3>
                            <p className="text-[20px] text-white">GT</p>
                            <div className="hidden group-hover:flex items-center gap-2 bg-red-600 mt-2 p-2 px-4 rounded-3xl text-white transition-all duration-300">
                                <Link href="/category" className="flex items-center gap-2">
                                    Discover More
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deserunt...
                    </p>
                </div>

                {/* Card 3 */}
                <div>
                    <div className="group relative mt-[100px] rounded h-[400px] overflow-hidden">
                        <Image
                            src="/home/banner.webp"
                            alt="category"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500 transform"
                        />
                        <div className="z-0 absolute inset-0 bg-black opacity-40" />
                        <div className="top-4 left-4 z-10 absolute">
                            <h3 className="font-black text-[25px] text-white">Hero</h3>
                            <p className="text-[20px] text-white">GT</p>
                            <div className="hidden group-hover:flex items-center gap-2 bg-red-600 mt-2 p-2 px-4 rounded-3xl text-white transition-all duration-300">
                                <Link href="/category" className="flex items-center gap-2">
                                    Discover More
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
