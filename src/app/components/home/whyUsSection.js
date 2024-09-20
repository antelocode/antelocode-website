import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const WhyUsSection = () => {
    return  (
        <section className="min-h-screen md:h-fit lg:min-h-screen px-8 md:px-16 lg:px-24 xl:px-56 py-20 md:py-28 xl:py-72 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 xl:space-x-24 2xl:space-x-56 bg-[#FF4C4C] relative">
            <div className="hidden xl:inline-block w-full md:w-[40%] xl:w-[60%] 2xl:w-[30%]">
                <div className="overflow-hidden">
                    <img src="img/picture-light-1.png" className="hover:scale-110 duration-300"></img>
                </div>
            </div>
            <div className="w-full xl:w-[80%] 2xl:w-[40%] flex flex-col">
                <span>
                    Antelocode
                </span>
                <h2 className="font-bold text-4xl xl:text-5xl">
                    Why us?
                </h2>
                <div className="mt-8 md:hidden w-full xl:w-[30%]">
                    <div className="overflow-hidden">
                        <img src="img/picture-light-1.png" className="hover:scale-110 duration-300"></img>
                    </div>
                </div>
                <p className="mb-5 mt-8 text-justify">
                    At Antelocode, we understand the crucial role a captivating and functional online presence plays in your business success. We are dedicated to transforming your vision into reality with our extensive expertise and creative approach.
                </p>
                <p className="mb-7 text-justify">
                    We don't just build visually stunning and responsive websites; we ensure optimal performance and an unparalleled user experience. With a keen eye for detail and an unwavering commitment to quality, we deliver innovative web solutions tailored specifically to meet your unique needs.
                </p>
                <Link href={"https://wa.link/fy27k3"}>
                    <button className="px-10 py-3 flex items-center space-x-2 bg-white hover:bg-[#eaff4c] w-fit duration-200">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <span>
                            contact us
                        </span>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default WhyUsSection;