import Image from "next/image";

export default function Columns() {

    return (
        <section className="bg-white pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <div className="pb-3">
                        <Image src="/home/enhanced-performances1.png" alt="Enhanced Performance" width={70} height={40} className="pb-3" />
                    </div>
                    <h3 className="mt-2 font-black text-[16px] uppercase">Enhanced Performance</h3>
                </div>

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <div className="pb-3">
                        <Image src="/home/high-quality-material1.png" alt="High Quality Material" width={90} height={40} className="pb-3" />
                    </div>
                    <h3 className="-top-1 relative font-black text-[16px] uppercase">High Quality Material</h3>
                </div>

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <div className="pb-3">
                        <Image src="/home/dynotest1.png" alt="Dyno Tested" width={100} height={40} className="pb-3" />
                    </div>
                    <h3 className="-top-3 relative font-black text-[16px] uppercase">Dyno Tested</h3>
                </div>

                <div className="flex flex-col justify-center items-center pb-4 text-black text-center">
                    <div className="pb-3">
                        <Image src="/home/easyinstallation.png" alt="Easy Installation" width={70} height={40} className="pb-3" />
                    </div>
                    <h3 className="mt-2 font-black text-[16px] uppercase">Easy Installation</h3>
                </div>

            </div>
        </section>
    );
}
