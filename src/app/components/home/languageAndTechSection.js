import { useLenis } from "@/context/LenisContext";
import Link from "next/link";
import { useEffect, useRef } from "react"

const LanguageAndTechSection = () => {
    const lenis = useLenis();

    const languageAndTechSectionRef = useRef();
    const paralaxElementRef = useRef();

    useEffect(() => {
        if (languageAndTechSectionRef.current && paralaxElementRef.current) {
            const mouseMoveEventHandler = (e) => {
                paralaxElementRef.current.style.transform = `translateY(${e.clientY / 50}px)`
            }

            languageAndTechSectionRef.current.addEventListener("mousemove", mouseMoveEventHandler)

            return () => {
                if(languageAndTechSectionRef.current) {
                    languageAndTechSectionRef.current.removeEventListener("mousemove", mouseMoveEventHandler)
                }
            }
        }
    }, [])

    return (
        <section className="px-8 py-20 md:px-16 lg:px-24 xl:px-10 md:py-32 w-full min-h-screen md:h-fit lg:min-h-screen flex flex-col lg:flex-row justify-center items-center xl:space-x-20 2xl:space-x-32 bg-[#FF4C4C] relative overflow-hidden" ref={languageAndTechSectionRef} id="tech-skills-section">
            <img src="img/mountain_5.svg" className="w-screen absolute bottom-0 left-0" ref={paralaxElementRef}/>

            {/* content */}
            <div className="w-full lg:w-[40%] xl:w-[45%]  hidden xl:grid grid-cols-2 xl:grid-cols-4 gap-5 z-[1]">
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/html.png" className="w-14"/>
                    <span className="">
                        HTML
                    </span>
                </div>
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/css.png" className="w-14"/>
                    <span className="">
                        CSS
                    </span>
                </div>
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/javascript.png" className="w-14"/>
                    <span className="">
                        Javascript
                    </span>
                </div>
                <div className="w-full h-fit p-10 px-2 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/tailwind.png" className="w-14"/>
                    <span className="">
                        Tailwind CSS
                    </span>
                </div>
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/bootstrap.png" className="w-14"/>
                    <span className="">
                        Bootstrap
                    </span>
                </div>
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/react.png" className="w-14"/>
                    <span className="">
                        React.js
                    </span>
                </div>
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/nextjs.png" className="w-14"/>
                    <span className="">
                        Next.js
                    </span>
                </div>
                <div className="w-full h-fit p-10 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                    <img src="/img/tech/git.png" className="w-14"/>
                    <span className="">
                        Git
                    </span>
                </div>
            </div>
            <div className="w-full xl:w-[30%] flex flex-col space-y-8 z-[1]">
                <div className="flex flex-col">
                    <span className="text-xs">
                        antelocode
                    </span>
                    <h2 className="text-5xl font-bold">
                        Language and Tech
                    </h2>
                </div>
                <p>
                    At Antelocode, we use a diverse set of advanced technologies to build robust and dynamic web solutions. Our expertise spans modern frameworks and tools that ensure optimal performance, scalability, and functionality, delivering high-quality results tailored to your needs.
                </p>
                <div className="w-full xl:w-[40%] grid xl:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 z-[1]">
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/html.png" className="w-10"/>
                        <span className="">
                            HTML
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/css.png" className="w-10"/>
                        <span className="">
                            CSS
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/javascript.png" className="w-10"/>
                        <span className="">
                            Javascript
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/tailwind.png" className="w-10"/>
                        <span className="">
                            Tailwind CSS
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/bootstrap.png" className="w-10"/>
                        <span className="">
                            Bootstrap
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/react.png" className="w-10"/>
                        <span className="">
                            React.js
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/nextjs.png" className="w-10"/>
                        <span className="">
                            Next.js
                        </span>
                    </div>
                    <div className="w-full h-fit p-4 py-8 flex flex-col justify-center items-center space-y-7 rounded-[1rem] bg-[#ffe9ea] hover:scale-110 hover:cursor-pointer duration-300">
                        <img src="/img/tech/git.png" className="w-10"/>
                        <span className="">
                            Git
                        </span>
                    </div>
                </div>
                <button className="md:hidden xl:inline-block w-full xl:w-fit px-8 py-3 bg-white hover:bg-[#4cffcc] duration-200" onClick={() => (lenis?.current) && lenis.current.scrollTo("#works-section")}>
                    see our works
                </button>
            </div>
        </section>
    )
}

export default LanguageAndTechSection;