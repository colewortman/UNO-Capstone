"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  videoSrc?: string
  thumbnailSrc?: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  videoSrc,
  thumbnailSrc,
  href,
  className
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isLinkedCard = Boolean(href && href !== "#")
  const Card = isLinkedCard ? 'a' : 'div'
  const initials = author.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
  const needsToggle = text.length > 120

  const handlePlay = async () => {
    if (!videoRef.current) return
    try {
      await videoRef.current.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <Card
      {...(isLinkedCard ? { href } : {})}
      className={cn(
        "flex h-full flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "w-full",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
      <div className="mt-4 min-h-[4.5rem]">
        <p
          className={cn(
            "sm:text-md text-sm text-muted-foreground",
            !isExpanded && "line-clamp-3",
          )}
        >
          {text}
        </p>
        {needsToggle && !isLinkedCard && (
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-1 text-xs font-medium text-white/80 underline underline-offset-2 hover:text-white"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      {videoSrc && (
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-md border bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            preload="metadata"
            playsInline
            poster={thumbnailSrc ?? author.avatar}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            controls={isPlaying}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              type="button"
              aria-label="Play testimonial video"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/25 transition hover:bg-black/35"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/20 text-white shadow-lg backdrop-blur-sm">
                <Play className="h-5 w-5 translate-x-[1px] fill-current" />
              </span>
            </button>
          )}
        </div>
      )}
    </Card>
  )
}