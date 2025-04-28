import Image from "next/image";
import Link from "next/link";

export default function OrderDetail() {
    return (
        <>
            <section className="px-8 py-4">
                <h2 className="font-semibold text-[22px]">Orders</h2>

                <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5">

                    <div className="bg-[#ececec] p-3 rounded card">
                        <div className="flex justify-between pt-3">
                            <div>
                                <p>Order Comfirmed</p>
                            </div>
                            <div>
                                <Link href="#3" className="bg-red-600 p-2 text-white">Track Order</Link>
                            </div>
                        </div>
                        <div className="pt-4 border-red-600 border-b"></div>
                        <div className="px-8 py-3">
                            <div className="flex justify-between pb-2">
                                <p>Order Id</p>
                                <p>#1234</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Place on</p>
                                <p>27/04/2025</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Total</p>
                                <p>₹ 13000</p>
                            </div>

                            <p className="text-[22px] text-red-600">Total Items</p>

                            <div className="flex justify-between items-center gap-4 pt-4">
                                <div>
                                    <Image src="/home/banner.webp" alt="product" width={150} height={150} />
                                </div>
                                <div>
                                    <p>Slip - On Exhaust for Bear 650 - Cone Type</p>
                                    <p className="font-semibold">QTY 1</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#ececec] p-3 rounded card">
                        <div className="flex justify-between pt-3">
                            <div>
                                <p>Order Comfirmed</p>
                            </div>
                            <div>
                                <Link href="#3" className="bg-red-600 p-2 text-white">Track Order</Link>
                            </div>
                        </div>
                        <div className="pt-4 border-red-600 border-b"></div>
                        <div className="px-8 py-3">
                            <div className="flex justify-between pb-2">
                                <p>Order Id</p>
                                <p>#1234</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Place on</p>
                                <p>27/04/2025</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Total</p>
                                <p>₹ 13000</p>
                            </div>

                            <p className="text-[22px] text-red-600">Total Items</p>

                            <div className="flex justify-between items-center gap-4 pt-4">
                                <div>
                                    <Image src="/home/banner.webp" alt="product" width={150} height={150} />
                                </div>
                                <div>
                                    <p>Slip - On Exhaust for Bear 650 - Cone Type</p>
                                    <p className="font-semibold">QTY 1</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#ececec] p-3 rounded card">
                        <div className="flex justify-between pt-3">
                            <div>
                                <p>Order Comfirmed</p>
                            </div>
                            <div>
                                <Link href="#3" className="bg-red-600 p-2 text-white">Track Order</Link>
                            </div>
                        </div>
                        <div className="pt-4 border-red-600 border-b"></div>
                        <div className="px-8 py-3">
                            <div className="flex justify-between pb-2">
                                <p>Order Id</p>
                                <p>#1234</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Place on</p>
                                <p>27/04/2025</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Total</p>
                                <p>₹ 13000</p>
                            </div>

                            <p className="text-[22px] text-red-600">Total Items</p>

                            <div className="flex justify-between items-center gap-4 pt-4">
                                <div>
                                    <Image src="/home/banner.webp" alt="product" width={150} height={150} />
                                </div>
                                <div>
                                    <p>Slip - On Exhaust for Bear 650 - Cone Type</p>
                                    <p className="font-semibold">QTY 1</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#ececec] p-3 rounded card">
                        <div className="flex justify-between pt-3">
                            <div>
                                <p>Order Comfirmed</p>
                            </div>
                            <div>
                                <Link href="#3" className="bg-red-600 p-2 text-white">Track Order</Link>
                            </div>
                        </div>
                        <div className="pt-4 border-red-600 border-b"></div>
                        <div className="px-8 py-3">
                            <div className="flex justify-between pb-2">
                                <p>Order Id</p>
                                <p>#1234</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Place on</p>
                                <p>27/04/2025</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Total</p>
                                <p>₹ 13000</p>
                            </div>

                            <p className="text-[22px] text-red-600">Total Items</p>

                            <div className="flex justify-between items-center gap-4 pt-4">
                                <div>
                                    <Image src="/home/banner.webp" alt="product" width={150} height={150} />
                                </div>
                                <div>
                                    <p>Slip - On Exhaust for Bear 650 - Cone Type</p>
                                    <p className="font-semibold">QTY 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}