'use client';

import { useState } from 'react';
import { GoPencil } from 'react-icons/go';

export default function ProfileDetail() {
    const [showPopup, setShowPopup] = useState(false);
    const [ShowPopupAddress, setShowPopupAddress] = useState(false);

    return (
        <section className="px-6 lg:px-30 py-4">
            <h3 className="pb-5 font-semibold text-[22px]">Profile</h3>

            <div className="bg-[#e6e2e2] p-3 rounded">
                <div className="flex items-center gap-3 pb-3">
                    <p className="text-gray-500">Name</p>
                    <button onClick={() => setShowPopup(true)} className="cursor-pointer">
                        <GoPencil />
                    </button>
                </div>
                <p className="text-gray-500">Email</p>
                <p className="text-[16px]">vishnutechnox@gmail.com</p>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 bg-black opacity-40"
                        onClick={() => setShowPopup(false)}
                    ></div>

                    {/* Popup content */}
                    <div className="z-10 relative bg-white p-6 rounded-lg w-full max-w-md">
                        <h4 className="mb-4 font-semibold text-lg">Edit Profile</h4>
                        <form>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="outline-none w-full"
                                        required
                                    />
                                </div>
                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="outline-none w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-2 p-2 border rounded">
                                <input
                                    type="email"
                                    value="vishnutechnox@gmail.com"
                                    readOnly
                                    className="bg-gray-100 outline-none w-full"
                                />
                            </div>
                            <p className="pt-2 text-gray-500 text-sm">
                                Email used for login can't be changed
                            </p>

                            <div className="mt-4 text-end">
                                <button
                                    type="button"
                                    onClick={() => setShowPopup(false)}
                                    className="mr-2 px-4 py-2 border rounded cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-red-600 px-4 py-2 rounded text-white cursor-pointer"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <div className="bg-[#e6e2e2] mt-6 p-3 rounded">
                <div className="flex items-center gap-3 pb-3">
                    <p className="font-semibold">Address</p>
                    <button onClick={() => setShowPopupAddress(true)} className="cursor-pointer">
                        + Add
                    </button>
                </div>
                <p className="text-[16px]">D.No. 54, 1st Floor, Above Hang &apos;Out&apos;, <br /> Bharathi Park Rd, 7th cross,<br /> Saibaba colony,<br /> Coimbatore - 641011.</p>
            </div>

            {/* Popup */}
            {ShowPopupAddress && (
                <div className="z-50 fixed inset-0 flex justify-center items-center">
                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 bg-black opacity-40"
                        onClick={() => setShowPopup(false)}
                    ></div>

                    {/* Popup content */}
                    <div className="z-10 relative bg-white p-6 rounded-lg w-full max-w-md">
                        <h4 className="mb-4 font-semibold text-lg">Edit Profile</h4>
                        <form>
                            <div className="flex-1 p-2 border rounded">
                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="outline-none w-full"
                                    required
                                />
                            </div>
                            <div className="flex gap-4 mt-2 mb-4">

                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="outline-none w-full"
                                        required
                                    />
                                </div>
                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 p-2 border rounded">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="outline-none w-full"
                                    required
                                />
                            </div>

                            <div className="flex-1 mt-2 p-2 border rounded">
                                <input
                                    type="text"
                                    placeholder="Apartment (Optional)"
                                    className="outline-none w-full"

                                />
                            </div>

                            <div className="flex gap-2 mt-3">
                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="outline-none w-full"
                                    />
                                </div>
                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="outline-none w-full"
                                    />
                                </div>
                                <div className="flex-1 p-2 border rounded">
                                    <input
                                        type="text"
                                        placeholder="Pincode"
                                        className="outline-none w-full"
                                    />
                                </div>
                            </div>


                            <div className="mt-4 text-end">
                                <button
                                    type="button"
                                    onClick={() => setShowPopupAddress(false)}
                                    className="mr-2 px-4 py-2 border rounded cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-red-600 px-4 py-2 rounded text-white cursor-pointer"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
