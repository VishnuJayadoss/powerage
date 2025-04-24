import Image from "next/image";

export default function Assured() {
    return (
        <>
            <section className="bg-black py-12">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto px-6 max-w-7xl">
                    {/* Worldwide Delivery */}
                    <div className="flex flex-col items-center text-white text-center">
                        <Image src="/home/international-delivery.png" alt="WORLDWIDE DELIVERY" width={60} height={60} className="mb-4" />
                        <h3 className="mb-2 font-semibold text-lg">WORLDWIDE DELIVERY</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Not just India, we ship our products across<br /> the world!
                        </p>
                    </div>

                    {/* Made in India */}
                    <div className="flex flex-col items-center text-white text-center">
                        <Image src="/home/india.png" alt="MADE IN INDIA" width={60} height={60} className="mb-4" />
                        <h3 className="mb-2 font-semibold text-lg">MADE IN INDIA</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Proudly designed and manufactured in India<br /> and loved across the globe!
                        </p>
                    </div>

                    {/* Powerage Assured */}
                    <div className="flex flex-col items-center text-white text-center">
                        <Image src="/home/reliability.png" alt="POWERAGE ASSURED" width={60} height={60} className="mb-4" />
                        <h3 className="mb-2 font-semibold text-lg">POWERAGE ASSURED</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Lifetime repair service on all products we<br /> manufacture in-house.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
}