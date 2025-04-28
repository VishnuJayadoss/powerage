import Image from "next/image";

export default function OurProcess() {

    const process = [
        {
            title: "Design & Development",
            description: `Our products are carefully designed and manufactured by a highly skilled team of industrial designers, engineers, and architects. The team meet challenges every day, combining a technical solution with an attractive, modern, and state-of-the-art design and taking it to the next level. We spend hours and hours of time on the design table to get the product most elegant, durable with optimized performance. Our product development leads to cutting edge advancements in performance at cost-effective prices.`,
            img: "/home/banner.webp"
        },
        {
            title: "Manufacturing",
            description: `Our meticulous manufacturing process uses the highest quality materials available in the market and employs the best hands in the industry to come up with the mechanical marvels. Because, it is the material, workforce and technology that makes the products. Every production step, from welding to final assembly, is carried out in-house. Production is catered by the use of state-of-the-art software, reverse engineering tools, presses, 2D and 3D lasers, Tube benders, machining, finishing and test benches.`,
            img: "/home/banner.webp"
        },
        {
            title: "Testing & Validation",
            description: `Products are evaluated and optimized for structural rigidity, fatigue, and thermal loads, and are thoroughly tested to assure the best performance and reliability in the real-world. All our systems are dyno tested on a chassis dyno, measuring torque, power, temperatures, and backpressure and optimize the design to take maximum output.`,
            img: "/home/banner.webp"
        }
    ];


    return (
        <>
            <div className="bg-process p-4 lg:pr-[70px] lg:pl-[70px]">
                <h2 className="pb-4 font-extrabold text-[30px] uppercase">Our Process</h2>

                <div className="gap-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {process.map((processes, index) => (
                        <div className="process-card" key={index}>
                            <div className="process-img">
                                <Image src={processes.img} alt="process" width={1000} height={1000} className="pb-3 w-full h-[300px]" />
                            </div>
                            <div className="p-3 process-content">
                                <h3 className="pb-2 font-extrabold text-[25px]">{processes.title}</h3>
                                <p className="text-gray-600 text-justify">{processes.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}