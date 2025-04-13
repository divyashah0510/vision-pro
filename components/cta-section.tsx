"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [email, setEmail] = useState("");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the launch date (e.g., 30 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30); // Adjust as needed

    const calculateTimeLeft = () => {
      const difference = +launchDate - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft()); // Initial calculation

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);
  useGSAP(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate form
    const form = document.querySelector(".cta-form");
    gsap.fromTo(
      form,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: form,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate countdown
    const countdown = document.querySelector(".countdown");
    gsap.fromTo(
      countdown,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: countdown,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thank you for joining the waitlist!");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-black to-[#2B2B2B]/30 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#39FF14_0,transparent_70%)] opacity-5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#000000_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#2B2B2B] text-[#39FF14] text-sm">
            Limited Availability
          </div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white opacity-0"
          >
            Be First to See Tomorrow
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-8">
            Join the waitlist to be among the first to experience the future of
            spatial computing.
          </p>

          <form onSubmit={handleSubmit} className="cta-form opacity-0 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#2B2B2B]/50 border-[#2B2B2B] text-white placeholder:text-[#D3D3D3]/50 focus:border-[#39FF14]"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90 transition-opacity"
              >
                Pre-order Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>

          <div className="countdown opacity-0">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#2B2B2B]/50 border border-[#2B2B2B] text-[#F5F5F5]">
              <Clock className="w-4 h-4 text-[#39FF14]" />
              <span>Launch countdown: {timeLeft.days} days</span>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mt-8">
              {[
                timeLeft.days,
                timeLeft.hours,
                timeLeft.minutes,
                timeLeft.seconds,
              ].map((num, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2B2B2B] to-black border border-[#2B2B2B] mb-2">
                    <span className="text-2xl font-bold text-[#39FF14]">
                      {String(num).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-[#D3D3D3]">
                    {index === 0
                      ? "Days"
                      : index === 1
                      ? "Hours"
                      : index === 2
                      ? "Minutes"
                      : "Seconds"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
