import Image from "next/image";
import Link from "next/link";

export default function BestSeller() {


    const seller = [
        {
            slug: "/products/detail",
            img: "/home/product.webp",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000"
        },
        {
            slug: "/products/detail",
            img: "/home/product.webp",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000"
        },
        {
            slug: "/products/detail",
            img: "/home/product.webp",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000"
        },
        {
            slug: "/products/detail",
            img: "/home/product.webp",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000"
        }
    ];


    return (
        <>
            <div className="bg-seller p-6 lg:pt-[20px] lg:pr-[70px] lg:pb-[30px] lg:pl-[70px]">
                <div className="pb-[20px] text-center">
                    <h3 className="inline-block px-6 py-2 border-[3px] border-red-600 font-black text-[20px] uppercase">
                        Best Seller
                    </h3>
                </div>

                <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {seller.map((sellers, index) => (
                        <Link href={sellers.slug} key={index}>
                            <div className="bg-[#f1f1f1] rounded hover:-translate-y-2 duration-300 seller-card">
                                <div className="seller-card-img">
                                    <Image src={sellers.img} alt={sellers.title} width={350} height={250} className="object-cover" />
                                </div>
                                <div className="p-3 pt-3 pb-3 text-center seller-content">
                                    <div className="pb-2 vendor">
                                        <p className="text-[12px] text-gray-400 uppercase">{sellers.vendor}</p>
                                    </div>
                                    <div className="pb-2 font-extrabold card-title">
                                        <h3>{sellers.title}</h3>
                                    </div>

                                    <div className="price">
                                        <p>{sellers.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
}