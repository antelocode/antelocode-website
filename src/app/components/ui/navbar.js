'use client';

import { useLenis } from "@/context/LenisContext";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavbarSection = () => {
    const lenis = useLenis();

    return (
        <header className="w-full flex justify-between items-center absolute top-0 left-0 py-8 md:py-10 z-40 px-8 md:px-12 xl:px-32 2xl:px-52">
            <h2 className="font-bold text-lg z-40">
                Antelocode
            </h2>
            <ul className="hidden lg:flex space-x-5 items-center">
                <li>
                    <button className="hover:text-red-500 duration-150" onClick={() => (lenis?.current) && lenis.current.scrollTo("#price-plans-section")}>
                        Pricing Plans
                    </button>
                </li>
                <li>
                    <button className="hover:text-red-500 duration-150" onClick={() => (lenis?.current) && lenis.current.scrollTo("#question-section")}>
                        FAQs
                    </button>
                </li>
                <li>
                    <button className="hover:text-red-500 duration-150" onClick={() => (lenis?.current) && lenis.current.scrollTo("#contact-section")}>
                        Get in Touch
                    </button>
                </li>
                <li>
                    <div className="w-1 h-5 bg-[#D84343]"></div>
                </li>
                <li>
                    <Link href={"https://www.instagram.com/antelocode/"}>
                        <img src="img/icon/instagram.png" className="w-4 hover:-translate-y-[2px] hover:scale-110 duration-150"></img>
                    </Link>
                </li>
                <li>
                    <Link href={"https://www.youtube.com/@antelocode"}>
                        <img src="img/icon/youtube.png" className="w-4 hover:-translate-y-[2px] hover:scale-110 duration-150"></img>
                    </Link>
                </li>
                <li>
                    <Link href={"https://medium.com/@antelocode"}>
                        <img src="img/icon/medium.png" className="w-4 hover:-translate-y-[2px] hover:scale-110 duration-150"></img>
                    </Link>
                </li>
                <li>
                    <Link href={"https://www.fiverr.com/antelocode"}>
                        <img src="img/icon/fiverr.png" className="w-4 hover:-translate-y-[2px] hover:scale-110 duration-150"></img>
                    </Link>
                </li>
            </ul>
            <button className="lg:hidden group">
                <div className="relative z-40">
                    <div className="flex group-focus:hidden flex-col space-y-1">
                        <div className="w-5 h-[2px] bg-slate-900"></div>
                        <div className="w-5 h-[2px] bg-slate-900"></div>
                        <div className="w-5 h-[2px] bg-slate-900"></div>
                    </div>
                    <div className="hidden group-focus:inline-block bg-[#f7c87c] border border-[#f7c87c] rounded px-[6px] py-[1px]" role="button" tabIndex={0}>
                        <FontAwesomeIcon icon={faX}/>
                    </div>
                </div>

                <div className="w-full absolute -top-[150vh] group-focus:-top-5 left-0 py-10 pt-24 md:pt-32 z-30 bg-[#FF4C4C] shadow-2xl duration-200">
                    <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]" role="button" tabIndex={0} onClick={() => (lenis?.current) && lenis.current.scrollTo("#price-plans-section")}>
                        Pricing Plans
                    </div>
                    <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]" role="button" tabIndex={0} onClick={() => (lenis?.current) && lenis.current.scrollTo("#question-section")}>
                        FAQs
                    </div>
                    <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]" role="button" tabIndex={0} onClick={() => (lenis?.current) && lenis.current.scrollTo("#contact-section")}>
                        Get in Touch
                    </div>
                    <Link href={"https://www.instagram.com/antelocode/"}>
                        <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]">
                            Instagram
                        </div>
                    </Link>
                    <Link href={"https://www.youtube.com/@antelocode"}>
                        <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]">
                            Youtube
                        </div>
                    </Link>
                    <Link href={"https://medium.com/@antelocode"}>
                        <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]">
                            Medium
                        </div>
                    </Link>
                    <Link href={"https://www.fiverr.com/antelocode"}>
                        <div className="mx-8 md:mx-12 my-3 p-3 rounded-md text-left bg-[#ffc787]">
                            Fiverr
                        </div>
                    </Link>
                </div>
            </button>
        </header>
    )
}

export default NavbarSection;