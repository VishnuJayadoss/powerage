'use client';

import Image from "next/image";
import axios from "../../../../lib/axios.js";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useEmail } from '@/context/EmailContext';

export default function LoginDetail() {
    const [email, setLocalEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { setEmail } = useEmail();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            await axios.post('/auth/send-otp', { email });
            setEmail(email); // store it in context
            toast.success("OTP sent to your mail id!");
            router.push('/otp'); // no query param
        } catch (err: any) {
            toast.error(err?.response?.data?.message || "Failed to send OTP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <section className="mt-6 md:mt-30 px-6 lg:px-100 py-5">
                <div className="bg-[#ececec] rounded">
                    <div className="flex justify-center p-4">
                        <Image src="/logo.png" alt="Logo" width={200} height={200} />
                    </div>

                    <div className="p-8">
                        <p className="pb-5">Enter your email and we&#39;ll send you a login code</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="mb-2 p-2 border rounded w-full"
                                required
                                value={email}
                                onChange={e => setLocalEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-red-600 disabled:opacity-50 mt-4 p-2 rounded w-full text-white cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Continue"}
                            </button>
                        </form>
                    </div>

                    <div className="pb-3 pl-4">
                        <Link href="/privacy-policy">Privacy</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
