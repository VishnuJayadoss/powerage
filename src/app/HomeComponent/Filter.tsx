"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const makes = ["Royal Enfield", "Honda", "Hero"];
const models = ["GT", "Classic", "Bear 650"];
const years = ["2012 - 2020", "2021 - 2023", "2024 - 2025"];

export default function Filter() {
    const [makeOpen, setMakeOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState("Select Make");
    const [makeSearch, setMakeSearch] = useState("");

    const [modelOpen, setModelOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState("Select Model");
    const [modelSearch, setModelSearch] = useState("");

    const [yearOpen, setYearOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState("Select Year");
    const [yearSearch, setYearSearch] = useState("");

    const filteredMakes = makes.filter(make =>
        make.toLowerCase().includes(makeSearch.toLowerCase())
    );

    const filteredModels = models.filter(model =>
        model.toLowerCase().includes(modelSearch.toLowerCase())
    );

    const filteredYears = years.filter(year =>
        year.toLowerCase().includes(yearSearch.toLowerCase())
    );

    return (
        <section className="bg-black px-6 py-6">
            <h2 className="mb-6 font-extrabold text-white text-xl text-center uppercase tracking-wider">
                Select Your Bike
            </h2>
            <form action="">
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Make Dropdown */}
                    <Dropdown
                        label="1"
                        selected={selectedMake}
                        setSelected={setSelectedMake}
                        open={makeOpen}
                        setOpen={setMakeOpen}
                        items={filteredMakes}
                        search={makeSearch}
                        setSearch={setMakeSearch}
                        placeholder="Select Make"
                    />

                    {/* Model Dropdown */}
                    <Dropdown
                        label="2"
                        selected={selectedModel}
                        setSelected={setSelectedModel}
                        open={modelOpen}
                        setOpen={setModelOpen}
                        items={filteredModels}
                        search={modelSearch}
                        setSearch={setModelSearch}
                        placeholder="Select Model"
                    />

                    {/* Year Dropdown */}
                    <Dropdown
                        label="3"
                        selected={selectedYear}
                        setSelected={setSelectedYear}
                        open={yearOpen}
                        setOpen={setYearOpen}
                        items={filteredYears}
                        search={yearSearch}
                        setSearch={setYearSearch}
                        placeholder="Select Year"
                    />

                    {/* Filter Button */}
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-bold text-white uppercase tracking-wider cursor-pointer"
                    >
                        Filter
                    </button>
                </div>
            </form>
        </section>
    );
}

function Dropdown({
    label,
    selected,
    setSelected,
    open,
    setOpen,
    items,
    search,
    setSearch,
    placeholder
}: {
    label: string;
    selected: string;
    setSelected: (val: string) => void;
    open: boolean;
    setOpen: (val: boolean) => void;
    items: string[];
    search: string;
    setSearch: (val: string) => void;
    placeholder: string;
}) {
    return (
        <div className="relative min-w-[220px] text-white">
            <div
                className="flex items-center gap-2 px-4 py-2 border border-white rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <span className="flex justify-center items-center bg-black border border-white rounded-full w-6 h-6 font-bold text-sm">
                    {label}
                </span>
                <span className="flex-1 truncate">
                    {selected || placeholder}
                </span>
                <span className="text-white">
                    <IoIosArrowDown />
                </span>
            </div>

            {open && (
                <div className="left-0 z-10 absolute bg-white shadow-lg mt-2 rounded-md w-full max-h-60 overflow-y-auto text-black">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-3 py-2 border-b outline-none w-full text-sm"
                    />
                    <ul>
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => {
                                    setSelected(item);
                                    setOpen(false);
                                    setSearch("");
                                }}
                            >
                                {item}
                            </li>
                        ))}
                        {items.length === 0 && (
                            <li className="px-4 py-2 text-gray-500">No results</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
