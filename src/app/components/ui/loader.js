import { useEffect, useRef } from "react";

const LoaderSection = () => {
    const loaderSectionRef = useRef();

    useEffect(() => {
        if(typeof window !== "undefined") {
            const loadHandler = () => {
                setTimeout(() => {
                    loaderSectionRef.current.style.opacity = 0;
                    
                    setTimeout(() => {
                        loaderSectionRef.current.style.display = "none";
                    }, 500)
                }, 800)
            }

            window.addEventListener("load", loadHandler());

            return () => {
                window.removeEventListener("load", loadHandler())
            }
        }
    }, [])

    return (
        <section className="w-full h-screen flex items-center justify-center bg-[#FF4C4C] fixed z-50 duration-500" ref={loaderSectionRef}>
            <div className="flex flex-col items-center justify-center space-y-5">
                <img src="/img/ui/preloader.gif" className="w-16"></img>
                <div className="flex items-center space-x-3">
                    <span>Loading </span>
                    <div className="flex itme-center space-x-1">
                        <span className="text-lg animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                        <span className="text-lg animate-bounce" style={{ animationDelay: '100ms' }}>.</span>
                        <span className="text-lg animate-bounce" style={{ animationDelay: '200ms' }}>.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoaderSection;
