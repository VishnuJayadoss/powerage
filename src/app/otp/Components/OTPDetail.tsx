// src/app/otp/Components/OTPDetail.tsx
'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "../../../../lib/axios.js";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEmail } from '@/context/EmailContext';

export default function OTPDetail() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { email } = useEmail();

    useEffect(() => {
        if (!email) {
            router.replace('/login');
        }
    }, [email, router]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value.replace(/\D/g, ''));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        if (code.length !== 6) {
            toast.error("Enter a valid 6-digit code.");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post('/auth/verify-otp', { email: email, otp: code });
            const { access_token, user } = res.data;

            if (access_token && user?.id) {
                await fetch('/api/set-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: access_token, userId: user.id }),
                });

                toast.success("Login successful!");
                router.replace('/profile');
            } else {
                throw new Error("Invalid response from server.");
            }
        } catch (err: any) {
            toast.error(err?.response?.data?.message || "OTP verification failed.");
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
                        <h2 className="font-semibold text-[25px]">Enter Code</h2>
                        <p className="pb-5">Code sent to your email</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="6-digit code"
                                className="mb-2 p-2 border rounded w-full"
                                maxLength={6}
                                inputMode="numeric"
                                value={code}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-red-600 disabled:opacity-50 mt-4 p-2 rounded w-full text-white cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Continue"}
                            </button>
                        </form>
                    </div>

                    <div className="pb-3">
                        <Link href="#">Privacy</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
