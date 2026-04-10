"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, CheckCircle2 } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { motion } from "framer-motion"
import { ProjectsSection } from "@/components/ProjectsSection"

export default function Page() {
  return (
    <>
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
                <Link href="#projects">
                  <Button size="lg" className="w-full sm:w-auto">
                    View My Work
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-xl px-6">
                  GitHub
                </Button>
                <Button variant="outline" className="rounded-xl px-6">
                  LinkedIn
                </Button>
                <Button variant="outline" className="rounded-xl px-6">
                  Twitter
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>khairoonmohamed08@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>Mombasa, KE (Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">open</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full max-w-[550px] aspect-square mx-auto order-1 lg:order-2"
            >
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-95" />

              {/* Online badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-background/80 backdrop-blur-sm border border-border/40 flex items-center gap-1.5 px-2 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium">Online</span>
                </Badge>
              </div>

              <Image
                src="/IMG_0612.jpg (3).jpeg"
                alt="Profile Photo"
                fill
                priority
                className="object-cover object-top rounded-2xl shadow-2xl border border-border/40
                           hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <ProjectsSection />
    </>
  )
}