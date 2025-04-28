import Image from "next/image";

export default function Product() {
    return (
        <>
            <div className="bg-black">
                <h3 className="mb-6 p-6 font-semibold text-[25px] text-white uppercase">Interceptor 650 / GT 650</h3>
            </div>
            <div className="bg-seller p-6 lg:pt-[40px] lg:pr-[70px] lg:pb-[40px] lg:pl-[70px]">

                <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-[#e6e2e2] p-4 rounded hover:-translate-y-2 duration-300 seller-card">
                        <div className="seller-card-img">
                            <Image src="/home/product.webp" alt="product" width={350} height={250} />
                        </div>
                        <div className="pt-2 text-center seller-content">
                            <div className="pb-2 card-title">
                                <h3>Slip - On Exhaust for Bear 650 - Cone Type</h3>
                            </div>
                            <div className="pb-2 vendor">
                                <p className="text-[12px] text-gray-400 uppercase">Powerage</p>
                            </div>
                            <div className="price">
                                <p>₹ 19,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e6e2e2] p-4 rounded hover:-translate-y-2 duration-300 seller-card">
                        <div className="seller-card-img">
                            <Image src="/home/product.webp" alt="product" width={350} height={250} />
                        </div>
                        <div className="pt-2 text-center seller-content">
                            <div className="pb-2 card-title">
                                <h3>Slip - On Exhaust for Bear 650 - Cone Type</h3>
                            </div>
                            <div className="pb-2 vendor">
                                <p className="text-[12px] text-gray-400 uppercase">Powerage</p>
                            </div>
                            <div className="price">
                                <p>₹ 19,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e6e2e2] p-4 rounded hover:-translate-y-2 duration-300 seller-card">
                        <div className="seller-card-img">
                            <Image src="/home/product.webp" alt="product" width={350} height={250} />
                        </div>
                        <div className="pt-2 text-center seller-content">
                            <div className="pb-2 card-title">
                                <h3>Slip - On Exhaust for Bear 650 - Cone Type</h3>
                            </div>
                            <div className="pb-2 vendor">
                                <p className="text-[12px] text-gray-400 uppercase">Powerage</p>
                            </div>
                            <div className="price">
                                <p>₹ 19,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e6e2e2] p-4 rounded hover:-translate-y-2 duration-300 seller-card">
                        <div className="seller-card-img">
                            <Image src="/home/product.webp" alt="product" width={350} height={250} />
                        </div>
                        <div className="pt-2 text-center seller-content">
                            <div className="pb-2 card-title">
                                <h3>Slip - On Exhaust for Bear 650 - Cone Type</h3>
                            </div>
                            <div className="pb-2 vendor">
                                <p className="text-[12px] text-gray-400 uppercase">Powerage</p>
                            </div>
                            <div className="price">
                                <p>₹ 19,000</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}