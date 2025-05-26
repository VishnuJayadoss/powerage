import Image from "next/image";

export default function RawMaterial() {
    return (
        <section className="bg-black px-4 pt-10 pb-10">
            <div className="items-center gap-6 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl">

                {/* Image Section - show first on mobile/tablet */}
                <div className="relative order-1 lg:order-1 w-full h-full">
                    <Image
                        src="/home/banner.webp"
                        alt="About"
                        width={1000}
                        height={1000}
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="order-2 lg:order-2 bg-black shadow-lg p-6 sm:p-8 lg:p-12 rounded-2xl text-gray-300">
                    <h2 className="mb-2 font-extrabold text-white text-2xl sm:text-3xl">Raw Materials</h2>
                    <div className="mb-2 border-red-600 border-b-[2px]"></div>
                    <p className="mb-0 text-justify">
                        All our systems are made from high grade 304 stainless steel for a long life of augmented performance.
                        And also use high quality thermal and acoustic insulation, to obtain a product with an aesthetic and dynamic performance
                        which always exceeds expectations.
                    </p>
                </div>
            </div>
        </section>
    );
}
