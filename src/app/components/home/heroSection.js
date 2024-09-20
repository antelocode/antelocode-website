"use client";

import { useEffect, useRef } from "react"
import { faCaretDown, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeroSection = () => {
    const heroSectionRef = useRef();
    const paralaxElementsRef = useRef([]);

    useEffect(() => {
        if (heroSectionRef.current && paralaxElementsRef.current[0]) {
            const mouseMoveEventHandler = (e) => {
                paralaxElementsRef.current[0].style.transform = `translateX(${e.clientX / 250}px) translateY(${e.clientY / 150}px)`
                paralaxElementsRef.current[1].style.transform = `translateX(${e.clientX / 250}px) translateY(${e.clientY / 100}px)`
                paralaxElementsRef.current[2].style.transform = `translateX(${e.clientX / 250}px) translateY(${e.clientY / 300}px)`
                paralaxElementsRef.current[3].style.transform = `translateX(${e.clientX / 250}px) translateY(${e.clientY / 200}px)`
                paralaxElementsRef.current[4].style.transform = `translateX(${e.clientX / 250}px) translateY(${e.clientY / 500}px)`
                paralaxElementsRef.current[5].style.transform = `translateX(${e.clientX / 250}px) translateY(${e.clientY / 240}px)`
            }
            heroSectionRef.current.addEventListener("mousemove", mouseMoveEventHandler)

            return () => {
                if(heroSectionRef.current) {
                    heroSectionRef.current.removeEventListener("mousemove", mouseMoveEventHandler)
                }
            }
        }
    }, [])

    return (
        <section className="w-full h-screen flex justify-center items-center bg-[#FFAF52] relative overflow-hidden" ref={heroSectionRef}>
            {/* background */}
            <div className="w-[120vw] h-[200vw] rounded-full bg-[#F8B567] -left-48 -top-[25%] absolute"></div>
            <div className="w-[100vw] h-[150vw] rounded-full bg-[#FDBA6C] left-0 right-0 mx-auto -top-[5%] absolute"></div>
            <div className="w-[85vw] h-[85vw] rounded-full bg-[#FFC076] left-0 right-0 mx-auto top-[13%] absolute"></div>
            <div className="w-[60vw] h-[60vw] rounded-full bg-[#FFC076] left-0 right-0 mx-auto top-[20%] absolute"></div>
            <div className="w-[60vw] h-[60vw] rounded-full bg-[#FFC582] left-0 right-0 mx-auto top-[35%] absolute"></div>
            <div className="w-[40vw] h-[40vw] rounded-full bg-[#FFCF97] left-0 right-0 mx-auto top-[55%] absolute"></div>

            <img src="img/forest_1.svg" className="absolute -left-5 bottom-[7vw] w-[55vw] z-[2]" ref={(e) => paralaxElementsRef.current[0] = e}></img>
            <img src="img/mountain_1.svg" className="absolute right-0 bottom-0 w-[75vw] z-[3]" ref={(e) => paralaxElementsRef.current[1] = e}></img>
            <img src="img/mountain_2.svg" className="absolute right-0 bottom-[12vw] w-[62vw] z-[1]" ref={(e) => paralaxElementsRef.current[2] = e}></img>
            <img src="img/mountain_4.svg" className="absolute -left-20 bottom-0 w-[32vw] z-[2]" ref={(e) => paralaxElementsRef.current[3] = e}></img>
            <img src="img/mountain_3.svg" className="absolute left-0 bottom-[12vw] w-[45vw] z-[0]" ref={(e) => paralaxElementsRef.current[4] = e}></img>
            <img src="img/tree.svg" className="absolute -left-5 bottom-0 w-[30vw] z-[3]" ref={(e) => paralaxElementsRef.current[5] = e}></img>

            <div className="w-[60vw] h-[14vw] bg-[#FA6349] absolute left-0 bottom-0 z-0"></div>

            <div className="w-fit absolute bottom-10 md:bottom-14 xl:bottom-20 left-10 md:left-14 xl:left-32 2xl:left-52 z-[6]">
                15-5-24
            </div>

            {/* content */}
            <div className="flex flex-col space-y-10 xl:space-y-24 z-[5]">
                <div className="flex flex-col">
                    <span className="text-left">Hi there, it's us</span>
                    <h2 className="font-bold text-4xl md:text-5xl xl:text-8xl">
                        ANTELOCODE
                    </h2>
                    <p className="text-center">Let us bring your website ideas to life</p>
                </div>

                <div className="h-20 flex flex-col justify-center items-center space-y-2">
                    <span className="text-xl">
                        scroll
                    </span>
                    <div className="z-[5] flex flex-col -space-y-2">
                        <FontAwesomeIcon icon={faChevronDown} className="z-[5] w-4 animate-bounce"/>
                        <FontAwesomeIcon icon={faChevronDown} className="z-[5] w-4 animate-ping"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection