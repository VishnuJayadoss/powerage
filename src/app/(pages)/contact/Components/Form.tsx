'use client';

import Link from "next/link";


export default function Form() {
    return (
        <section className="bg-black px-6 py-10 text-white text-center">

            <h4 className="mb-8 font-semibold text-2xl sm:text-3xl capitalize">
                Get in touch and we&#39;ll be happy to help.
            </h4>

            <div className="items-center gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-5">

                <div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <div className="flex justify-between gap-2 w-34">
                                <h2 className="uppercase">Address</h2>
                                <span>:</span>
                            </div>
                            <p className="text-start">
                                Panik Enterprises,<br />
                                No. 59/6 B, SF No. 55/3, L & T Bypass Road,<br />
                                Pattanam, Coimbatore - 641016,<br />
                                Tamil Nadu, India
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="flex justify-between gap-2 w-34">
                                <h2 className="uppercase">Email</h2>
                                <span>:</span>
                            </div>
                            <p className="text-start">
                                <Link href="mailto:sales@powerageperformance.com" className="text-red-600">
                                    sales@powerageperformance.com
                                </Link><br />
                                <Link href="mailto:support@powerageperformance.com" className="text-red-600">
                                    support@powerageperformance.com
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="flex justify-between gap-2 w-34">
                                <h2 className="uppercase">Phone Number</h2>
                                <span>:</span>
                            </div>
                            <p className="text-start">
                                <Link href="tel:8220255746" className="text-red-600">
                                    +91 82202 55746
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <form className="space-y-4 mx-auto max-w-xl text-left">
                        <div className="flex sm:flex-row flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                                required
                            />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={12}
                            onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                            }}
                            required
                        />
                        <textarea
                            name="comment"
                            rows={4}
                            placeholder="Comment"
                            className="bg-transparent p-3 border border-white focus:border-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full text-white placeholder-gray-400"
                            required
                        />

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
