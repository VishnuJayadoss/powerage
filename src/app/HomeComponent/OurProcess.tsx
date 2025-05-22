import Image from "next/image";

export default function OurProcess() {

    const process = [
        {
            img: "/home/banner.webp",
            title: "Design & Development",
            description: `Our products are carefully designed and manufactured by a highly skilled team of industrial designers, engineers, and architects. The team meet challenges every day, combining a technical solution with an attractive, modern, and state-of-the-art design and taking it to the next level. We spend hours and hours of time on the design table to get the product most elegant, durable with optimized performance. Our product development leads to cutting edge advancements in performance at cost-effective prices.`,
        },
        {
            img: "/home/banner.webp",
            title: "Manufacturing",
            description: `Our meticulous manufacturing process uses the highest quality materials available in the market and employs the best hands in the industry to come up with the mechanical marvels. Because, it is the material, workforce and technology that makes the products. Every production step, from welding to final assembly, is carried out in-house. Production is catered by the use of state-of-the-art software, reverse engineering tools, presses, 2D and 3D lasers, Tube benders, machining, finishing and test benches.`,
        },
        {
            img: "/home/banner.webp",
            title: "Testing & Validation",
            description: `Products are evaluated and optimized for structural rigidity, fatigue, and thermal loads, and are thoroughly tested to assure the best performance and reliability in the real-world. All our systems are dyno tested on a chassis dyno, measuring torque, power, temperatures, and backpressure and optimize the design to take maximum output.`,
        }
    ];

    return (
        <>

            <div className="bg-process p-4 lg:pt-[60px] lg:pr-[60px] lg:pb-[60px] lg:pl-[60px]">
                <h2 className="pb-5 font-extrabold text-[30px] text-center uppercase">Our Process</h2>

                <ul className="process">
                    {process.map((processes, index) => (
                        <li className="process__item" key={index}>
                            <Image src={processes.img} alt={processes.title} width={1000} height={1000} className="w-full h-[280px] object-cover" />
                            <span className="process__title">{processes.title}</span>
                            <span className="process__subtitle">{processes.description}</span>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    );
}