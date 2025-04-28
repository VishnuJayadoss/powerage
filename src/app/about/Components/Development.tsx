import Image from "next/image";

export default function Development() {
    return (
        <section className="bg-black px-4 py-8">
            <div className="items-center gap-6 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl">

                {/* Image Section */}
                <div className="relative order-1 lg:order-2">

                    {/* Desktop/Tablet Image */}
                    <div className="">
                        <Image
                            src="/home/banner.webp" // Replace with actual public path
                            alt="Desktop About"
                            width={1000}
                            height={1000}
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>

                </div>

                {/* Text Section */}
                <div className="order-2 lg:order-1 shadow-lg p-6 sm:p-8 lg:p-12 rounded-2xl text-gray-300">
                    <h2 className="mb-2 font-extrabold text-white text-2xl sm:text-3xl">Development</h2>
                    <div className="mb-2 border-red-600 border-b-[2px]"></div>
                    <p className="mb-4">
                        The highly specialized workforce is supported in every area by the highest level of technological know-how, in order to always achieve the finest outcome.
                    </p>
                    <p className="mb-4">
                        From design to production attention to detail leading to maximum performance. Our unique design gives the maximum power and torque output with the least stress on the engine.
                    </p>
                    <p className="mb-4">
                        The final configuration is developed and evaluated on a chassis dyno, measuring torque, power, temperatures, and backpressure.
                    </p>
                    <p className="mb-0">
                        All our systems are bolt-on type which is hassle free and no modification required from the OE setup.
                    </p>
                </div>

            </div>
        </section>
    );
}
