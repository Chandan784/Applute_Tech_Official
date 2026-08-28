"use client";

import { useEffect, useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Splash screen = 2 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    if (showSplash) return;

    // Website becomes visible after 2 sec.
    // Modal appears 10 sec later.
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(modalTimer);
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen />}

      <div
        className={`transition-opacity duration-700 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <Services />
          <About />
       
          <Process />
        
          {/* <Portfolio />
          <Testimonials /> */}
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>

      <WhatsAppButton />

      {showModal && (
        <EnquiryModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}