'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginDetail() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            console.log("Valid email submitted:", email);
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
                        <p className="pb-5">Enter your email and we&#39;ll send you a login code</p>

                        <form action="">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mb-2 p-2 border rounded w-full"
                                required
                            />

                            {error && <p className="mb-4 text-red-500">{error}</p>}

                            <button
                                className="bg-red-600 mt-4 p-2 rounded w-full text-white cursor-pointer"
                                onClick={handleSubmit}
                            >
                                Continue
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
