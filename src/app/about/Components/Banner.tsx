import Link from "next/link";

export default function Banner() {
    return (
        <>
            <section className="about-bg">

                <div className="bottom-[100px] left-[50px] z-2 absolute text-white">
                    <h3 className="pb-4 text-[40px]">ABOUT POWERAGE</h3>
                    <Link href="#3" className="bg-red-600 pt-3 pr-[30px] pb-3 pl-[30px] rounded text-[18px]">All Product</Link>
                </div>

            </section>
        </>
    );
}