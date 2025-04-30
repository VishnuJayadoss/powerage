import Image from "next/image";

export default function Columns() {

    const column = [
        {
            img: "/home/enhanced-performance.png",
            title: "Enhanced Performance"
        },
        {
            img: "/home/high-quality-material.png",
            title: "High Quality Material"
        },
        {
            img: "/home/dyno-tested.png",
            title: "Dyno Tested"
        },
        {
            img: "/home/easy-installation.png",
            title: "Easy Installation"
        },
    ];

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
                {column.map((columns, index) => (
                    <div key={index} className="flex flex-col justify-center items-center pb-4 text-black text-center">
                        <Image src={columns.img} alt={columns.title} width={100} height={100} className="pb-3" />
                        <h3 className="mt-2 font-black text-[20px]">{columns.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
