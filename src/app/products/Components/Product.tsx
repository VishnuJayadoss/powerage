import Image from "next/image";
import Link from "next/link";

export default function Product() {


    const products = [
        {
            slug: "products/detail",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000",
            img: "/home/product.webp"
        },
        {
            slug: "products/details",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000",
            img: "/home/product.webp"
        },
        {
            slug: "products/details",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000",
            img: "/home/product.webp"
        },
        {
            slug: "products/detail",
            title: "Slip - On Exhaust for Bear 650 - Cone Type",
            vendor: "Powerage",
            price: "₹ 19,000",
            img: "/home/product.webp"
        }
    ];


    return (
        <>
            <div className="bg-black">
                <h3 className="mb-6 p-6 font-semibold text-[25px] text-white uppercase">Interceptor 650 / GT 650</h3>
            </div>
            <div className="bg-seller p-6 lg:pt-[40px] lg:pr-[70px] lg:pb-[40px] lg:pl-[70px]">

                <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <Link href={product.slug} key={index}>
                            <div className="bg-[#e6e2e2] p-4 rounded hover:-translate-y-2 duration-300 seller-card">
                                <div className="seller-card-img">
                                    <Image src={product.img} alt={product.title} width={350} height={250} />
                                </div>
                                <div className="pt-2 text-center seller-content">
                                    <div className="pb-2 card-title">
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className="pb-2 vendor">
                                        <p className="text-[12px] text-gray-400 uppercase">{product.vendor}</p>
                                    </div>
                                    <div className="price">
                                        <p>{product.price}</p>
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