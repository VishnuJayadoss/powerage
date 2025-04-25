import Image from "next/image";
import Link from "next/link";

export default function Aboutdetail() {
    return (
        <section className="bg-black px-4 py-12">
            <div className="relative items-center grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl">
                {/* Image Section */}
                <div className="z-0 relative">
                    <Image
                        src="/home/banner.webp"
                        alt="About"
                        width={1000}
                        height={1000}
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="z-10 relative bg-white shadow-lg lg:mt-[120px] lg:-ml-16 p-10 rounded-2xl text-gray-600">
                    <h2 className="mb-4 font-semibold text-black text-2xl">Performance Exhausts</h2>
                    <p className="mb-4">
                        PoweRage is your source for quality automotive performance exhausts. Emerging as a premium brand, PoweRage aims to become the preferred destination for every automobile enthusiast, with a promise of high quality, reliable products. We offer performance parts for Motorcycles and Cars.
                    </p>
                    <p>
                        At PoweRage, we are revolutionizing the way in which people look at motor vehicles. We are the new-age hub for riders and motor vehicle enthusiasts. PoweRage makes some of the best performance parts in the world that make your rides and drives smoother, more comfortable and at the same time, all more powerful. We strongly believe and know that comfort and power can coexist; in fact, that is the only way in which they can ever exist.
                    </p><br></br>
                    <Link href="#3" className="px-8 py-3 border border-red-600 rounded text-red-600">All Products</Link>
                </div>
            </div>
        </section>
    );
}
