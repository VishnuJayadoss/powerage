import Image from "next/image";

export default function Columns() {
    return (
        <>
            <section className="bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
                    <div className="flex flex-col justify-center items-center pb-4 text-white text-center">
                        <Image src="/home/enhanced-performance.png" alt="Enhanced Performance" width={100} height={100} className="pb-3" />
                        <h3 className="mt-2 font-semibold">Enhanced Performance</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-4 text-white text-center">
                        <Image src="/home/high-quality-material.png" alt="High Quality Material" width={100} height={100} className="pb-3" />
                        <h3 className="mt-2 font-semibold">High Quality Material</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-4 text-white text-center">
                        <Image src="/home/dyno-tested.png" alt="Dyno Tested" width={100} height={100} className="pb-3" />
                        <h3 className="mt-2 font-semibold">Dyno Tested</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center text-white text-center">
                        <Image src="/home/easy-installation.png" alt="Easy Installation" width={100} height={100} className="pb-3" />
                        <h3 className="mt-2 font-semibold">Easy Installation</h3>
                    </div>
                </div>
            </section>


        </>
    );
}