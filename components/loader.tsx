"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-transparent mb-8">
          Vision Pro
        </h1>

        <div className="w-64 h-1 bg-[#2B2B2B] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#39FF14] to-[#00FFFF]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        <p className="mt-4 text-[#D3D3D3] text-sm">Loading experience... {Math.round(progress)}%</p>
      </motion.div>
    </motion.div>
  )
}
