"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpen, ExternalLink, Megaphone, Share2 } from "lucide-react"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Magazine",
    description:
      "A stylish magazine cover introduces Harvest & Hearth, a farm-to-table organic eatery with a focus on fresh, high-quality cuisine.",
    image: "/1.png",
    link: "https://canva.link/crz8lg9n1h82pbp",
    icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    title: "Poster",
    description:
      "A warm and inviting poster announces the grand opening of Harvest & Hearth at Downtown Market Square on March 15.",
    image: "/2.png",
    link: "https://canva.link/r83m6kycvt2rshn",
    icon: <Megaphone className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    title: "Social media",
    description:
      "A cohesive Twitter campaign for Harvest & Hearth builds excitement with countdown posts, brand storytelling, and fresh farm-to-table visuals.",
    image: "/3.png",
    link: "https://canva.link/v071uw6icgjf5ug",
    icon: <Share2 className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
]

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            A few creative works designed for Harvest & Hearth.
          </p>
        </div>

        <BentoGrid>
          {projects.map((project, index) => (
            <BentoGridItem
              key={project.title}
              className={index === 2 ? "md:col-span-2" : ""}
              title={project.title}
              icon={project.icon}
              header={
                <div className="relative h-44 w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/bento:scale-[1.03]"
                  />
                </div>
              }
              description={
                <div className="space-y-4">
                  <p>{project.description}</p>
                  <Button asChild variant="outline">
                    <a href={project.link} target="_blank" rel="noreferrer noopener">
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </motion.section>
  )
}
