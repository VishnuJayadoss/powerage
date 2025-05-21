"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import CartCount from "../Header/Components/CartCount";
import Search from "../Header/Components/Search";
import { LuLogOut } from "react-icons/lu";

export default function DesktopHeader() {
  const [showShape, setShowShape] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpenprofile, setDropdownOpenprofile] = useState(false)

  const handleIconClick = () => {
    if (window.innerWidth < 768) { // md breakpoint
      setDropdownOpenprofile(!isDropdownOpenprofile);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowShape(false);
        setScrolled(true);
      } else {
        setShowShape(true);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hidden xl:block">
      <div
        className={clsx(
          "z-50 fixed flex flex-row w-full transition-all duration-500",
          scrolled ? "top-0" : "top-8"
        )}
        style={{
          transition: "top 0.5s",
        }}
      >
        <div
          className="flex flex-row bg-white pl-[140px] border-b border-b-[#e5e7eb]"
          id="home"
        >
          <Link className="pt-[8px]" href="/en.html">
            <Image
              src="/logo.png"
              alt="Akrapovič"
              width={180}
              height={60}
              className={clsx(
                "h-auto transition-all duration-500 ease-in-out",
                scrolled ? "w-[120px] h-[40px]" : "w-[180px] h-[60px]"
              )}
              style={{
                transition: "width 0.5s, height 0.5s",
                width: scrolled ? 170 : 180,
                height: scrolled ? 40 : 60,
                objectFit: "contain",
              }}
              priority
            />
          </Link>
        </div>
        <div className="w-[44px]">
          <div
            id="straight"
            className={clsx(
              "bg-white h-[60px]",
              scrolled && "border-b border-b-[#e5e7eb]"
            )}
          ></div>
          <div
            className={clsx(
              "overflow-hidden transition-all duration-1000 ease-in-out",
              showShape ? "opacity-100 max-h-[40px]" : "opacity-0 max-h-0"
            )}
            style={{ willChange: "opacity, max-height" }}
          >
            <svg id="chicane" width="44" height="20" className="block">
              <path d="M0,20 C22,20 22,0 44,0 L0,0" fill="#ffffff" />
              <path
                d="M0,20 C22,20 22,-1 44,-1"
                stroke="#e5e7eb"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white border-b border-b-[#e5e7eb] h-[60px] grow"></div>
        <div className="w-[44px]">
          <div className="bg-white h-[18px]">
            <svg width="44" height="18">
              <path d="M0,0 C12,0 22,18 44,18 L44,0" fill="#e5e7eb" />
            </svg>
          </div>
          <div className="bg-white border-b border-b-[#e5e7eb] h-[42px]"></div>
        </div>
        <div>
          <div className="bg-gray-200 pr-[140px] h-[18px]"></div>
          <div className="flex flex-row justify-between items-center gap-20 bg-white pr-10 border-b border-b-[#e5e7eb] h-[42px]">
            <div className="flex items-center gap-10">
              <Link
                className="mr-6 font-black text-[14px] text-black hover:text-red-600 text-center uppercase leading-[1.1] cursor-pointer cal-sans"
                href="/"
              >
                Home
              </Link>
              <div className="relative mr-6">
                {/* Button */}
                <button className="peer flex items-center font-bold text-[14px] text-black hover:text-red-600 uppercase leading-[1.1] cursor-pointer cal-sans">
                  Products <svg className="ml-1" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z" /></svg>
                </button>

                {/* Dropdown */}
                <div className="invisible hover:visible peer-hover:visible top-[100%] left-[-320px] z-50 absolute bg-[#f5f5f5] opacity-0 hover:opacity-100 peer-hover:opacity-100 shadow-xl mt-4 px-8 py-6 rounded-md lg:w-[900px] h-40 text-sm transition-all duration-300 ease-in-out dropdown-menu-product">
                  <div className="flex gap-8 w-full">
                    {/* Left: Store message */}
                    <div className="w-1/2">
                      <p className="pt-5 font-light text-[30px] text-gray-700">
                        Visit Our <br />
                        <span className="font-medium text-red-600">Store</span>
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="bg-gray-300 w-px"></div>

                    {/* Middle + Right */}
                    <div className="flex gap-[60px] w-full">
                      {/* Middle column links */}
                      <div className="flex flex-col gap-5">
                        <Link href="/category" className="hover:text-red-600">Royal Enfield</Link>
                        <Link href="/category" className="hover:text-red-600">Honda</Link>
                        <Link href="/category" className="hover:text-red-600">Hero</Link>
                      </div>

                      {/* Divider */}
                      <div className="bg-gray-300 ml-[120px] w-px"></div>

                      {/* Right column links */}
                      <div className="flex flex-col gap-2">
                        <Link href="/category" className="hover:text-red-600">Exhaust Accessories</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                className="mr-6 font-bold text-[14px] text-black hover:text-red-600 text-center uppercase leading-[1.1] cursor-pointer cal-sans"
                href="/about"
              >
                About
              </Link>

              <Link
                className="mr-6 font-bold text-[14px] text-black hover:text-red-600 text-center uppercase leading-[1.1] cursor-pointer cal-sans"
                href="/dealer"
              >
                Dealer
              </Link>

              <Link
                className="mr-6 font-bold text-[14px] text-black hover:text-red-600 text-center uppercase leading-[1.1] cursor-pointer cal-sans"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="flex justify-end items-center gap-5">
              <Search />
              <div
                className="group top-[4px] relative"
                onMouseEnter={() => window.innerWidth >= 768 && setDropdownOpenprofile(true)} // Only hover on desktop
                onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpenprofile(false)}
              >
                <button
                  onClick={handleIconClick}
                  className="cursor-pointer"
                >
                  <FaRegUser className="hover:text-red-600 cursor-pointer" />
                  {/* Dropdown menu */}
                  {isDropdownOpenprofile && (
                    <div className="top-5 right-[-30px] z-50 absolute bg-white shadow-lg mt-2 rounded-md w-40">
                      <div className="py-2">
                        <Link href="/profile" className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 hover:text-red-600">
                          <FaRegUser size={18} />
                          <span>Profile</span>
                        </Link>
                        <Link href="/logout" className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 hover:text-red-600">
                          <LuLogOut size={18} />
                          <span>Logout</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </button>
              </div>
              <div className="relative">
                <Link href="/cart" className="cursor-pointer">
                  <FiShoppingCart className="hover:text-red-600 cursor-pointer" />
                  < CartCount />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
