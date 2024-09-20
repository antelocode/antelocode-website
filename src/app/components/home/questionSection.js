import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const QuestionSection = () => {
    const questionSectionRef = useRef();
    const paralaxElementRef = useRef();

    useEffect(() => {
        if (questionSectionRef && questionSectionRef.current && paralaxElementRef.current) {
            const mouseMoveEventHandler = (e) => {
                paralaxElementRef.current.style.transform = `translateX(${e.clientX / 100}px) translateY(${e.clientY / 100}px)`
            }

            questionSectionRef.current.addEventListener("mousemove", mouseMoveEventHandler)

            return () => {
                if(questionSectionRef.current) {
                    questionSectionRef.current.removeEventListener("mousemove", mouseMoveEventHandler)
                }
            }
        }
    }, [])

    return (
        <div className="py-20 px-8 md:px-16 lg:px-28 w-full min-h-screen md:h-fit lg:min-h-screen flex justify-center items-center bg-[#FD764B] relative overflow-hidden" ref={questionSectionRef} id="question-section">
            <img src="/img/mountain_6.svg" className="w-[110vw] absolute -bottom-20 -left-6" ref={paralaxElementRef}/>

            {/* content */}
            <div className="w-full lg:w-[70%] xl:w-[60%] 2xl:w-[40%] flex flex-col justify-center items-center space-y-16 z-[1] py-40">
                <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className="font-bold text-4xl xl:text-5xl">Question</h3>
                    <p className="w-[80%]">
                        Got questions? Check out our Frequently Asked Questions below for quick answers. If you don't find what you're looking for, feel free to reach out!
                    </p>
                </div>
                <div className="min-h-[80vh] w-full flex flex-col space-y-3">
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                Do you provide website design, or do I need to provide my own design?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                I typically require my clients to provide the design for their website, but I can collaborate with designers or recommend talented designers if needed. If you have a specific design in mind, I will work closely with you to bring it to life in the development process.
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                What information or assets do you need from me to start working on my website?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                To get started, I will need your website design files (if you have them), your business goals, any specific functionality or features you want, branding guidelines (like logos and colors), and the content you'd like on the site (text, images, etc.).
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                Will my website be mobile-friendly?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                Yes, absolutely! I ensure that all websites I develop are mobile-friendly and responsive, meaning they will look and function great on devices of all sizes, from smartphones to desktops.
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                How long will it take to complete my website?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                The delivery time depends on the complexity of your design and the amount of content. I will provide an estimated delivery time once we discuss your project details. For a more accurate timeline, please contact me before placing an order.
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                How do we communicate during the project?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                I keep communication simple and flexible. You can reach me via WhatsApp, Discord, email, or regular text messaging—whichever method works best for you. I’m always available to discuss updates, answer questions, and ensure we're aligned throughout the project.
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                Do you offer SEO services as part of web development?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                Yes, I incorporate basic on-page SEO optimization when developing your website to improve search engine visibility. This includes optimizing meta tags, images, headings, and site speed. For more advanced SEO strategies, I can recommend additional services or specialists.
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                Do you include comments in the code?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                Yes, I provide detailed comments in the code to help you or any future developers understand the structure and functionality of the website.
                            </p>
                        </div>
                    </button>
                    <button className="flex flex-col group duration-200">
                        <div className="w-full flex items-center justify-between bg-[#FFCF97] p-5 px-8 rounded-md group-focus:rounded-b-none relative space-x-5">
                            <span className="text-sm md:text-base text-left xl:text-center">
                                Can you integrate third-party APIs?
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} className="rotate-0 group-focus:rotate-180 duration-200"/>

                            {/* close button */}
                            <div className="hidden group-focus:inline-block absolute w-full h-full top-0 left-0 rounded-lg" role="button" tabIndex={0}></div>
                        </div>
                        <div className="w-full h-0 group-focus:h-52 md:group-focus:h-36 lg:group-focus:h-40 xl:group-focus:h-28 bg-[#FFF3D6] p-0 px-8 group-focus:p-5 group-focus:px-8 rounded-b-md text-left text-slate-700 overflow-hidden duration-200">
                            <p className="text-sm md:text-base">
                                Yes, I can integrate third-party APIs into your website to enhance its functionality according to your needs.
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuestionSection;