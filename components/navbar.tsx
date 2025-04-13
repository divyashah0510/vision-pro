"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <span className="text-xl font-bold bg-gradient-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-transparent">
                  Vision Pro
                </span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <Button variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10">
                Pre-order
              </Button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatedMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

function NavLinks() {
  const links = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <>
      {links.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
        >
          <Link href={link.href} className="text-[#D3D3D3] hover:text-[#39FF14] transition-colors">
            {link.name}
          </Link>
        </motion.div>
      ))}
    </>
  )
}

function AnimatedMobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const links = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "100vh" : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-14 left-0 right-0 bg-black/95 backdrop-blur-lg z-40 overflow-hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xl text-[#D3D3D3] hover:text-[#39FF14] transition-colors py-2"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
        <Button variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 w-full mt-4">
          Pre-order
        </Button>
      </div>
    </motion.div>
  )
}
