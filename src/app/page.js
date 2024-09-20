"use client";

import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/home/heroSection";
import NavbarSection from "./components/ui/navbar";
import WhyUsSection from "./components/home/whyUsSection";
import { LenisContextProvider } from "@/context/LenisContext";
import LanguageAndTechSection from "./components/home/languageAndTechSection";
import ContactSection from "./components/home/contactSection";
import WorkSection from "./components/home/worksSection";
import PriceAndPlanSection from "./components/home/priceAndPlanSection";
import QuestionSection from "./components/home/questionSection";
import FooterSection from "./components/ui/footer";
import LoaderSection from "./components/ui/loader";

export default function Home() {
  return (
    <>
      <LenisContextProvider>
        <main className="selection:bg-orange-100 text-slate-900">
          {/* loader */}
          <LoaderSection/>
          {/* content */}
          <NavbarSection/>
          <HeroSection/>
          <WhyUsSection/>
          <LanguageAndTechSection/>
          <PriceAndPlanSection/>
          <QuestionSection/>
          <ContactSection/>
          <WorkSection/>
          <FooterSection/>
        </main>
      </LenisContextProvider>
    </>
  );
}
