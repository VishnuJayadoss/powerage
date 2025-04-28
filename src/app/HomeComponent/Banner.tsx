import Link from "next/link";


export default function Banner() {
    return (
        <>
            <section className="home-bg">

                <div className="bottom-[100px] left-[50px] z-2 absolute text-white">
                    <p className="pb-[8px] text-[14px] uppercase">POWERAGE</p>
                    <h3 className="pb-4 font-extrabold text-[40px]">WE RIDE TOGETHER</h3>
                    <Link href="#3" className="bg-red-600 pt-3 pr-[30px] pb-3 pl-[30px] rounded text-[18px] uppercase">All Product</Link>
                </div>

            </section>
        </>
    );
}