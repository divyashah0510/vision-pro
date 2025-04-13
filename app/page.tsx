"use client";

import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import BenefitsSection from "@/components/benefits-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import Navbar from "@/components/navbar";
import Loader from "@/components/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Initialize scroll triggers and animations after loading
    if (!isLoading) {
      // Fade in the main content
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [isLoading]);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: featuresSection,
          offsetY: 80,
        },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading ? <Loader key="loader" /> : null}
      </AnimatePresence>

      <div
        ref={mainRef}
        className="relative min-h-screen bg-black text-[#D3D3D3] opacity-0"
      >
        <Navbar />

        <main className="relative">
          <HeroSection />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
            onClick={scrollToFeatures}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-light">Scroll to explore</span>
              <ChevronDown className="animate-bounce text-[#39FF14]" />
            </div>
          </motion.div>

          <FeaturesSection />
          <BenefitsSection />
          <TestimonialsSection />
          <CtaSection />
        </main>

        <footer className="border-t border-[#2B2B2B] py-8 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-[#F5F5F5]">Vision Pro</h3>
                <p className="text-sm text-[#D3D3D3]">
                  © {new Date().getFullYear()} Future Tech. All rights reserved.
                </p>
              </div>
              <div className="flex gap-8">
                <Link
                  href="#"
                  className="text-sm hover:text-[#39FF14] transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-sm hover:text-[#39FF14] transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm hover:text-[#39FF14] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
