import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";

const LenisContext = createContext(null);

export const LenisContextProvider = ({children}) => {
    const lenis = useRef(); 

    useEffect(() => {
        if(typeof window !== 'undefined') {
            lenis.current = new Lenis({
                lerp: 0.1, 
                smoothWheel: true, 
                duration: 1.5, 
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
            lenis.current.on("scroll", () => {})

            function raf(time) {
                lenis.current.raf(time);
                requestAnimationFrame(raf);
            }

            const rafId = requestAnimationFrame(raf);

            return () => {
                cancelAnimationFrame(rafId);
                if(lenis.current) {
                    lenis.current.destroy();
                    lenis.current = null;
                }
            }
        }
    }, [])

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    )
}

export const useLenis = () => {
    const context = useContext(LenisContext);

    if (context === undefined) {
        throw new Error("useLenis must be used within a LenisContextProvider");
    }

    return context;
};

export default LenisContext;