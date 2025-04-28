'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OTPDetail() {
    const [code, setCode] = useState("");

    // Properly typing the event in handleChange function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only digits (0-9)
        if (/^\d*$/.test(value)) {
            setCode(value);
        }
    };

    return (
        <>
            <section className="px-6 lg:px-100 py-5">
                <div className="bg-[#ececec] rounded">
                    <div className="flex justify-center p-4">
                        <Image src="/logo.png" alt="Logo" width={200} height={200} />
                    </div>

                    <div className="p-8">
                        <h2 className="font-semibold text-[25px]">Enter Code</h2>
                        <p className="pb-5">Code sent to your email</p>

                        <form action="">
                            <input
                                type="text"
                                placeholder="6-digit code"
                                className="mb-2 p-2 border rounded w-full"
                                maxLength={6}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={code}
                                onChange={handleChange}
                                required
                            />

                            <button
                                className="bg-red-600 mt-4 p-2 rounded w-full text-white cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="pb-3">
                        <Link href="#3" className="pl-4">Privacy</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
