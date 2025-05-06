"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://www.pwc.com/gx/en/zz-test-brand-assets-pages-25/syc/custom-hero/syc-generic-desktop.jpg"
          alt="PwC professionals in modern office environment"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight text-left whitespace-nowrap md:whitespace-normal">
            Your next deals, powered by PwC Korea.
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-white mb-12 max-w-3xl text-left">
            Navigate your M&A opportunities with proven expertise and a network you can highly trust.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#F4511E] hover:bg-[#D73C11] text-white border-none rounded-none px-8 py-6 text-base"
            >
              매물 등록하기
            </Button>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-200 border-none rounded-none px-8 py-6 text-base"
            >
              투자자 등록하기
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Add scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
