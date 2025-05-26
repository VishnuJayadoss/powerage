"use client";

import { useState } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("india");

    const tabContent: Record<string, { title: string; description: string }[]> = {
        india: [
            {
                title: "Kerala",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga est exercitationem ex, facilis impedit laborum recusandae deserunt, optio minus accusantium unde enim nulla soluta tenetur quas. Sint, asperiores perferendis.",
            },
            {
                title: "India1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga est exercitationem ex, facilis impedit laborum recusandae deserunt, optio minus accusantium unde enim nulla soluta tenetur quas. Sint, asperiores perferendis.",
            },
        ],
        europe: [
            {
                title: "Germany",
                description: "Europe content about Germany. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                title: "France",
                description: "Europe content about France. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        japan: [
            {
                title: "Tokyo",
                description: "Japan content about Tokyo. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                title: "Kyoto",
                description: "Japan content about Kyoto. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
    };

    return (
        <section className="mx-auto md:mt-20 px-6 py-12 max-w-6xl">
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8 pb-4 border-red-500 border-b-4">
                {["india", "europe", "japan"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-2 border-[2px] ${activeTab === tab ? "border-red-600 text-black" : "border-black text-black"
                            } font-extrabold hover:border-red-600`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="space-y-8">
                {tabContent[activeTab]?.map((item, index) => (
                    <div key={index} className="flex sm:flex-row flex-col items-start gap-4">
                        <div className="bg-red-600 mt-2 w-4 h-4"></div>
                        <div>
                            <h3 className="mb-2 font-bold text-[22px]">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
