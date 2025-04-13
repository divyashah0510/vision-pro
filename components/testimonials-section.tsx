"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      quote:
        "The Vision Pro has completely transformed how I visualize and present concepts to clients. The spatial computing capabilities make collaboration feel natural and intuitive.",
      rating: 5,
      imageUrl: "images/Alex Johnson.webp",
    },
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      quote:
        "As a developer, having multiple virtual screens that I can position anywhere has boosted my productivity exponentially. The hand tracking is incredibly precise.",
      rating: 5,
      imageUrl: "images/Sarah Chen.webp",
    },
    {
      name: "Michael Rodriguez",
      role: "Film Producer",
      quote:
        "Watching dailies and editing footage in a virtual cinema environment has changed my workflow forever. The immersion is unparalleled.",
      rating: 4,
      imageUrl: "images/Michael Rodriguez.webp",
    },
    {
      name: "Priya Patel",
      role: "Architect",
      quote:
        "Being able to walk through my 3D models at scale has revolutionized how I design spaces. Clients can now experience their future buildings before construction even begins.",
      rating: 5,
      imageUrl: "images/Priya Patel.webp",
    },
  ];

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

    // Animate testimonial cards
    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9400D3_0,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#2B2B2B] text-[#9400D3] text-sm">
            Testimonials
          </div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-white opacity-0"
          >
            Voices from the Future
          </h2>
          <p className="max-w-2xl mx-auto text-[#D3D3D3] text-lg">
            Hear from early adopters who are already experiencing the next
            generation of spatial computing.
          </p>
        </div>

        {/* Mobile testimonial carousel */}
        <div className="md:hidden relative">
          <div className="testimonial-card bg-gradient-to-br from-[#2B2B2B]/50 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#2B2B2B] overflow-hidden">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden border-2 border-[#9400D3] p-0.5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9400D3] to-[#00FFFF] opacity-30 animate-pulse" />
                <Image
                  src={testimonials[activeIndex].imageUrl || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-[#D3D3D3]">
                  {testimonials[activeIndex].role}
                </p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[activeIndex].rating
                          ? "text-[#9400D3] fill-[#9400D3]"
                          : "text-[#2B2B2B]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[#D3D3D3] italic mb-4">
              "{testimonials[activeIndex].quote}"
            </p>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#2B2B2B] text-white hover:bg-[#9400D3]/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#2B2B2B] text-white hover:bg-[#9400D3]/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop testimonial grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-gradient-to-br from-[#2B2B2B]/50 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#2B2B2B] hover:border-[#9400D3]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9400D3]/0 to-[#00FFFF]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden border-2 border-[#9400D3] p-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9400D3] to-[#00FFFF] opacity-30 animate-pulse" />
                  <Image
                    src={testimonial.imageUrl || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#D3D3D3]">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-[#9400D3] fill-[#9400D3]"
                            : "text-[#2B2B2B]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#D3D3D3] italic mb-4">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
