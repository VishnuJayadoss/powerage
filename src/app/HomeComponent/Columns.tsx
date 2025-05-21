import Image from "next/image";

export default function Columns() {

    return (
        <section className="bg-white pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <Image src="/home/enhanced-performances.png" alt="Enhanced Performance" width={60} height={60} className="pb-3" />
                    <h3 className="mt-2 font-black text-[16px] uppercase">Enhanced Performance</h3>
                </div>

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <Image src="/home/high-quality-material.png" alt="High Quality Material" width={100} height={100} className="pb-3" />
                    <h3 className="mt-2 font-black text-[16px] uppercase">High Quality Material</h3>
                </div>

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <Image src="/home/dyno-tested.png" alt="Dyno Tested" width={60} height={60} className="pb-3" />
                    <h3 className="mt-2 font-black text-[16px] uppercase">Dyno Tested</h3>
                </div>

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <Image src="/home/easy-installation.png" alt="Easy Installation" width={60} height={60} className="pb-3" />
                    <h3 className="mt-2 font-black text-[16px] uppercase">Easy Installation</h3>
                </div>

            </div>
        </section>
    );
}
