import Image from "next/image";
import Link from "next/link";

export default function Aboutdetail() {

    const images = [
        "/home/banner.webp",
        "/home/banner.webp",
        "/home/banner.webp",
        "/home/banner.webp",
    ];


    return (
        <>
            <section className="bg-black py-4">

                <div className="items-center gap-[60px] grid grid-cols-1 md:grid-cols-2 mx-auto py-[35px] w-[90%] max-w-[1170px]">
                    <div className="w-full">
                        <div className="gap-[10px] grid grid-cols-2 md:grid-cols-4 w-full">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`w-full h-[150px] md:h-[450px] overflow-hidden rounded-[10px] cursor-pointer shadow-[5px_10px_10px_rgba(0,0,0,0.15)] transform ${index % 2 === 0 ? "-translate-y-5" : "translate-y-5"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${index + 1}`}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-full object-cover hover:scale-100 transition-transform duration-300 ease-in-out select-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col items-start gap-[15px]">
                            <h4 className="font-black text-[22px] text-red-600 md:text-[25px]">
                                Performance Exhausts
                            </h4>

                            <p className="pb-[10px] text-[16px] text-white text-justify leading-[28px]">
                                PoweRage is your source for quality automotive performance exhausts. Emerging as a premium brand, PoweRage aims to become the preferred destination for every automobile enthusiast, with a promise of high quality, reliable products. We offer performance parts for Motorcycles and Cars.
                            </p>

                            <p className="pb-[10px] text-[16px] text-white text-justify leading-[28px]">
                                At PoweRage, we are revolutionizing the way in which people look at motor vehicles. We are the new-age hub for riders and motor vehicle enthusiasts. PoweRage makes some of the best performance parts in the world that make your rides and drives smoother, more comfortable and at the same time, all more powerful. We strongly believe and know that comfort and power can coexist; in fact, that is the only way in which they can ever exist.
                            </p>
                            <Link
                                href="#"
                                className="inline-block bg-red-600 px-[30px] py-[13px] rounded-[8px] text-[16px] text-white no-underline tracking-[1px] select-none"
                            >
                                All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
}
