"use client"

import type React from "react"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Eye, Hand, Speaker, Cpu, Layers } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

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
      },
    )

    // Animate cards
    const cards = document.querySelectorAll(".feature-card")
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
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
        },
      )
    })
  }, [])

  const features = [
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Eye & Hand Tracking",
      description:
        "Precise tracking technology that follows your eyes and hands for intuitive control of digital content.",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Micro-OLED 4K Displays",
      description: "Ultra-high resolution displays deliver stunning visuals with incredible detail and vibrant colors.",
    },
    {
      icon: <Speaker className="w-10 h-10" />,
      title: "Spatial Audio Immersion",
      description:
        "Advanced audio system creates a three-dimensional soundscape that surrounds you in any environment.",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Real-Time Sensor Fusion",
      description:
        "Powerful R1 chip processes multiple sensor inputs simultaneously for seamless mixed reality experiences.",
    },
    {
      icon: <Hand className="w-10 h-10" />,
      title: "Mixed Reality Switching",
      description: "Seamlessly transition between augmented and virtual reality with intuitive controls.",
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#39FF14_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#2B2B2B] text-[#39FF14] text-sm">
            New Features
          </div>
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6 text-white opacity-0">
            A Revolution in Every Frame
          </h2>
          <p className="max-w-2xl mx-auto text-[#D3D3D3] text-lg">
            The platform for rapid progress. Let your team focus on shipping features instead of managing
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="feature-card group relative bg-gradient-to-br from-[#2B2B2B]/50 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-[#2B2B2B] hover:border-[#39FF14]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/0 to-[#00FFFF]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-6 text-[#39FF14] group-hover:scale-110 transition-transform duration-300">{icon}</div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#39FF14] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-[#D3D3D3]">{description}</p>
      </div>

      {/* Animated corner accent */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#39FF14]/0 to-[#39FF14]/20 group-hover:from-[#39FF14]/10 group-hover:to-[#39FF14]/30 rounded-tl-3xl transition-all duration-300" />
    </div>
  )
}
