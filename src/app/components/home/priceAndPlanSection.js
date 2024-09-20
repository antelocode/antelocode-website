import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const PriceAndPlanSection = () => {
    return (
        <section className="w-full min-h-screen md:h-fit lg:min-h-screen py-20 px-8 md:px-16 flex flex-col lg:flex-row justify-center items-center xl:space-x-32 bg-[#FD764B] relative overflow-hidden" id="price-plans-section">
            <div className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[55%] flex flex-col space-y-10 xl:space-y-20 items-center justify-center">
                <div className="flex flex-col items-start lg:items-center justify-center text-left lg:text-center space-y-2">
                    <h2 className="text-4xl font-bold">Price and Plans</h2>
                    <p className="w-full lg:w-[80%]">
                        At Antelocode, our pricing and plans are designed to fit diverse needs and budgets. We offer clear and flexible options to provide you with the best value for your project
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-0 md:gap-x-10 xl:gap-x-16">
                    <div className="w-full flex flex-col space-y-4">
                        <span>
                            Plans
                        </span>
                        <div className="w-full flex flex-col space-y-2">
                            <div className="w-full bg-[#FFE8AD] flex items-center justify-between p-4 xl:p-5 rounded-md hover:scale-105 duration-300">
                                <span>1 Page, 6 sections</span>
                                <span>
                                    $15
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <div className="w-full bg-[#FFE8AD] flex items-center justify-between p-4 xl:p-5 rounded-md hover:scale-105 duration-300">
                                <span>2 Page, 6 sections</span>
                                <span>
                                    $30
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <div className="w-full bg-[#FFE8AD] flex items-center justify-between p-4 xl:p-5 rounded-md hover:scale-105 duration-300">
                                <span>3 Page, 7 sections</span>
                                <span>
                                    $45
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col space-y-4">
                        <span>
                            Add on
                        </span>
                        <div className="w-full flex flex-col space-y-2">
                            <div className="w-full bg-[#FFCF97] flex items-center justify-between p-4 xl:p-5 rounded-md hover:scale-105 duration-300">
                                <span>1 Page</span>
                                <span>
                                    $5
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <div className="w-full bg-[#FFCF97] flex items-center justify-between p-4 xl:p-5 rounded-md hover:scale-105 duration-300">
                                <span>1 section</span>
                                <span>
                                    $2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center space-y-5 lg:space-y-0 lg:space-x-8">
                    <p className="w-full lg:w-[70%] xl:w-[55%] 2xl:w-[60%]">
                        Explore our competitive plans and get a custom quote by contacting me directly on WhatsApp or check out my Fiverr profile. Let Antelocode provide you with exceptional web solutions that align perfectly with your budget and goals!
                    </p>
                    <div className="w-full md:w-fit flex flex-col md:flex-row lg:flex-col xl:flex-row space-y-3 md:space-y-0 lg:space-y-3 xl:space-y-0 md:space-x-5 lg:space-x-0 xl:space-x-5">
                        <Link href={"https://wa.link/fy27k3"}>
                            <button className="w-full md:w-fit lg:w-full xl:w-fit flex items-center justify-center space-x-2 px-8 py-3 bg-white hover:bg-[#61e544] duration-200">
                                <FontAwesomeIcon icon={faWhatsapp}/>
                                <span>
                                    contact us
                                </span>
                            </button>
                        </Link>
                        <Link href={"https://www.fiverr.com/antelocode"}>
                            <button className="w-full md:w-fit lg:w-full xl:w-fit px-8 py-3 bg-[#7CE86B] hover:bg-[#4cffe4] duration-200">
                                check my fiverr
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceAndPlanSection;