"use client";

import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleClick = () => {
        window.open("https://wa.me/916379672206", "_blank");
    };

    return (
        <>
            <footer className="bg-black px-6 py-10 text-[15px] text-gray-300">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl">
                    {/* Address Section */}
                    <div>
                        <h3 className="mb-2 font-semibold text-white text-lg">Address</h3>
                        <p className="mb-4 leading-relaxed">
                            <span className="font-semibold">Panik Enterprises,</span><br />
                            No. 59/6 B, SF No. 55/3, L & T Bypass Road,<br />
                            Pattanam, Coimbatore - 641016,<br />
                            Tamil Nadu, India
                        </p>
                        <div className="mb-2">
                            <h5 className="pb-2 font-medium">Email :</h5>
                            <Link href="mailto:sales@powerageperformance.com" className="block pb-2 text-red-600">
                                sales@powerageperformance.com
                            </Link>
                            <Link href="mailto:support@powerageperformance.com" className="block pb-2 text-red-600">
                                support@powerageperformance.com
                            </Link>
                        </div>
                        <div className='flex gap-2'>
                            <h5 className="pb-2 font-medium">Contact Us :</h5>
                            <Link href="tel:8220255746" className="block text-red-600">
                                82202 55746
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-2 font-semibold text-white text-lg">Quick Links</h3>
                        <ul className="space-y-2 mt-2">
                            <li >
                                <Link href="/about" className="block pb-3 hover:text-red-500">
                                    About
                                </Link>
                                <Link href="/blog" className="block pb-3 hover:text-red-500">
                                    Blog
                                </Link>
                                <Link href="/contact" className="block pb-3 hover:text-red-500">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div>
                        <h3 className="mb-2 font-semibold text-white text-lg">Policy Links</h3>
                        <ul className="space-y-2 mt-2">
                            <li>
                                <Link href="/terms-of-service" className="block pb-3 hover:text-red-500">
                                    Terms and Conditions
                                </Link>
                                <Link href="/privacy-policy" className="block pb-3 hover:text-red-500">
                                    Privacy Policy
                                </Link>
                                <Link href="/shipping-policy" className="block pb-3 hover:text-red-500">
                                    Shipping Policy
                                </Link>
                                <Link href="/return-policy" className="block pb-3 hover:text-red-500">
                                    Warrenty and Return Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mt-2 text-white text-lg">
                    <Link href="https://www.facebook.com/powerageperformance?rdid=nCtQEs62fgAtp5D7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BcuHFt5Pr%2F#"><FaFacebookF /></Link>
                    <Link href="https://www.instagram.com/powerage_performance/?igsh=MXBxdWR6MDduYnN1cg%3D%3D&utm_source=ig_contact_invite#"><FaInstagram /></Link>
                    <Link href="https://www.youtube.com/@powerageperformance"><FaYoutube /></Link>
                </div>


                <div
                    className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <button
                        onClick={handleClick}
                        className="bg-green-500 hover:bg-green-600 shadow-lg p-3 rounded-full text-white cursor-pointer"
                        aria-label="Chat on WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </button>
                </div>
            </footer>

            {/* Bottom Strip */}
            <div className="flex md:flex-row flex-col justify-between items-center bg-black px-6 py-4 border-t border-red-700 text-white text-sm">
                <p>
                    &copy; 2025. All Rights Reserved By Powerage
                </p>
            </div>
        </>
    )
}
