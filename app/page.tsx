"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Share2, X } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight Background */}
      <div className="absolute inset-0 w-full">
        <div
          className="absolute inset-0 [background-size:40px_40px] pointer-events-none select-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--background-foreground) / 5%) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--background-foreground) / 5%) 1px, transparent 1px)",
          }}
        />
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="hsl(var(--primary))"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container max-w-7xl px-4 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            {/* Badge */}
            <div>
              <Badge className="flex items-center gap-2 w-fit">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </Badge>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                  Khairoon
                </span>
              </h1>
            </div>

            {/* Container Text Flip */}
            <div className="flex items-center gap-2 text-xl font-medium text-foreground/80">
              <span>I build</span>
              <ContainerTextFlip
                words={[
                  "Networking",
                  "Web Development",
                  "Linux",
                  "Design",
                  "CCTV",
                  "Next.js",
                ]}
                className="!rounded-md !text-xl md:!text-2xl !pt-1 !pb-2 [background:none] !shadow-none"
                textClassName="text-primary font-bold"
                interval={3000}
                animationDuration={500}
              />
            </div>

            {/* Bio */}
            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
              I'm a passionate developer and tech enthusiast. I specialize in building
              modern web applications with Next.js and creating robust network
              infrastructure solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                title="GitHub"
              >
                <Code className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                title="LinkedIn"
              >
                <Share2 className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                title="Twitter/X"
              >
                <X className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-3xl" />

              {/* Profile Image */}
              <div className="relative w-80 h-80">
                <Image
                  src="/profile.jpg"
                  alt="Khairoon"
                  fill
                  className="rounded-full object-cover ring-2 ring-primary/20"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}