"use client";

import type React from "react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Users, Film, LayoutGrid } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

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

    // Animate benefit items
    const benefits = document.querySelectorAll(".benefit-item");
    benefits.forEach((benefit, index) => {
      gsap.fromTo(
        benefit,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: benefit,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const benefits = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "FaceTime in 3D",
      description:
        "Connect with friends and family like never before. See them in life-size, three-dimensional video that makes it feel like they're in the room with you.",
      imageUrl: "images/facetime.png",
      reverse: false,
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: "Immersive Cinema",
      description:
        "Transform any space into your personal theater. Watch movies on a screen that feels 100 feet wide with spatial audio that surrounds you in three-dimensional sound.",
      imageUrl: "images/cinema.png",
      reverse: true,
    },
    {
      icon: <LayoutGrid className="w-12 h-12" />,
      title: "Augmented Workspaces",
      description:
        "Expand your digital workspace beyond the confines of a traditional display. Arrange multiple apps and windows in your physical space for unprecedented multitasking.",
      imageUrl: "images/workspaces.png",
      reverse: false,
    },
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-black to-[#2B2B2B]/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#2B2B2B] text-[#39FF14] text-sm">
            Human Potential
          </div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-white opacity-0"
          >
            Designed for Human Potential
          </h2>
          <p className="max-w-2xl mx-auto text-[#D3D3D3] text-lg">
            Experience a new dimension of computing that enhances the way you
            connect, create, and collaborate.
          </p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-item grid grid-cols-1 ${
                benefit.reverse
                  ? "md:grid-cols-[1fr_1.2fr]"
                  : "md:grid-cols-[1.2fr_1fr]"
              } gap-8 md:gap-12 items-center opacity-0`}
            >
              {!benefit.reverse ? (
                <>
                  <BenefitContent
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                  <BenefitImage imageUrl={benefit.imageUrl} />
                </>
              ) : (
                <>
                  <BenefitImage imageUrl={benefit.imageUrl} />
                  <BenefitContent
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitContent({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#00FFFF]/20 text-[#39FF14]">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <p className="text-[#D3D3D3] text-lg leading-relaxed">{description}</p>

      <div className="pt-4">
        <div className="flex items-center gap-4">
          <div className="w-full h-2 bg-[#2B2B2B] rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-gradient-to-r from-[#39FF14] to-[#00FFFF]" />
          </div>
          <span className="text-[#F5F5F5] font-medium">85%</span>
        </div>
        <p className="text-sm text-[#D3D3D3] mt-2">User satisfaction rating</p>
      </div>
    </div>
  );
}

function BenefitImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/20 to-[#00FFFF]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10" />

      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Benefit illustration"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Holographic overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
    </div>
  );
}
