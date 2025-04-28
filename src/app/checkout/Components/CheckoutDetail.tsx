'use client';

import Image from "next/image";
import Link from "next/link";

export default function CheckoutDetail() {
    return (
        <>
        <section className="px-4 md:px-40 py-8">
            <div className="flex lg:flex-row flex-col-reverse gap-10">
                {/* Left Side - Form */}
                <div className="flex-1">
                    {/* Contact Info */}
                    <div className="mb-8">
                        <div className="flex justify-between">
                        <h3 className="mb-4 font-semibold text-lg">Contact</h3>
                        <Link href="#3" className="underline">Login</Link>
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email or mobile phone number"
                                className="p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring w-full"
                            />
                            {/* <div className="flex items-center mt-4">
                                <input type="checkbox" id="news" className="mr-2" />
                                <label htmlFor="news" className="text-sm">Email me with news and offers</label>
                            </div> */}
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="mb-8">
                        <h3 className="mb-4 font-semibold text-lg">Delivery</h3>
                        <div className="space-y-4">
                            {/* Country */}
                            <input
                                type="text"
                                placeholder="Country"
                                className="p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring w-full"
                            />

                            {/* Name */}
                            <div className="flex md:flex-row flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="First name (optional)"
                                    className="flex-1 p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="flex-1 p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring"
                                />
                            </div>

                            {/* Address */}
                            <input
                                type="text"
                                placeholder="Address"
                                className="p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring w-full"
                            />
                            <input
                                type="text"
                                placeholder="Apartment, suite, etc. (optional)"
                                className="p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring w-full"
                            />

                            {/* City, State, PIN code */}
                            <div className="flex md:flex-row flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="flex-1 p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    className="flex-1 p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring"
                                />
                                <input
                                    type="text"
                                    placeholder="PIN code"
                                    className="flex-1 p-2 border focus:border-blue-300 rounded focus:outline-none focus:ring"
                                />
                            </div>

                            {/* Save Info */}
                            <div className="flex items-center">
                                <input type="checkbox" id="save" className="mr-2" />
                                <label htmlFor="save" className="text-sm">Save this information for next time</label>
                            </div>


                            <h3 className="mb-4 font-semibold">Shipping method</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between p-3 border rounded">
                                    <div className="flex items-center">
                                        <input type="radio" name="shipping" id="standard" className="mr-2" />
                                        <label htmlFor="standard" className="text-sm">Standard</label>
                                    </div>
                                    <div>Free</div>
                                </div>

                                <div className="flex justify-between p-3 border rounded">
                                    <div className="flex items-center">
                                        <input type="radio" name="shipping" id="international" className="mr-2" />
                                        <label htmlFor="international" className="text-sm">International</label>
                                    </div>
                                    <div>₹ 2000</div>
                                </div>
                            </div>



                            <h3 className="mb-4 font-extrabold">Payment method</h3>

                            <div className="space-y-4">
                                <div className="flex items-center p-3 border rounded">
                                    <input type="radio" name="payment" id="rayorpay" className="mr-2" />
                                    <label htmlFor="rayorpay" className="text-sm">Rayorpay</label>
                                </div>

                                <div className="flex items-center p-3 border rounded">
                                    <input type="radio" name="payment" id="paypal" className="mr-2" />
                                    <label htmlFor="paypal" className="text-sm">PayPal</label>
                                </div>
                            </div>


                            <button className="bg-red-600 mt-6 p-2 rounded w-full text-white">Complete Order</button>

                        </div>
                    </div>
                </div>

                {/* Right Side - Summary */}
                <div className="lg:top-10 relative w-full lg:w-1/3">
                    <div className="top-40 sticky">
                        <div className="bg-gray-50 p-6 border rounded">
                            {/* Product Summary */}
                            <div className="flex items-center gap-4 pb-4 border-b">
                                <div className="relative w-16 h-16">
                                    <Image
                                        src="/home/product.webp"
                                        alt="Product"
                                        fill
                                        className="rounded object-cover"
                                    />
                                    <div className="-top-2 -right-2 absolute flex justify-center items-center bg-gray-800 rounded-full w-5 h-5 text-white text-xs">
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">Slip - On Exhaust for Bear 650 - Cone Type</p>
                                </div>
                                <div className="font-medium text-sm">
                                    ₹13,990.00
                                </div>
                            </div>

                            {/* Price Summary */}
                            <div className="space-y-2 mt-4 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>₹13,990.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>FREE</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center mt-6 pt-4 border-t font-semibold text-lg">
                                <span>Total</span>
                                <span>INR ₹13,990.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pt-3"></section>
        </>
    );
}
