import Image from "next/image"

export default function TopHeader() {

    return (
        <>
            <div className="bg-black p-2 px-2 lg:px-10">
                <div className="flex justify-between">
                    <div className="hidden md:block lg:block text-white">
                        <p><span className="font-semibold">Worldwide</span> Shipping</p>
                    </div>

                    <div className="lg:right-[30px] relative flex justify-start items-center gap-2 text-white">
                        <Image src="/india.webp" alt="India" width={30} height={30} />
                        <p><span className="font-semibold">Handcrafted in</span> India</p>
                    </div>

                    <div className="text-white">
                        <select name="" id="" >
                            <option value="" className="text-black">INR</option>
                            <option value="" className="text-black">USD</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    );
}



